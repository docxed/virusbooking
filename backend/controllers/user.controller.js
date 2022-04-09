const config = process.env
const pool = require("../config/database")
const Joi = require("joi")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { 
  selectPassUserById, 
  updateUserPass,
  updateUserProfile,
  deleteTokens,
  selectUserByEmail,
  selectTokens,
  addTokens,
  checkEmail,
  addUser,
  
} = require("../repository/user.repo")

const changepasswordSchema = Joi.object({
  oldpassword: Joi.string().required().min(5).max(20),
  password: Joi.string().required().min(5).max(20),
  c_password: Joi.string().required().valid(Joi.ref("password")),
})

const changepassword = async (req, res) => {
  try {
    await changepasswordSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { oldpassword, password } = req.body
    const user_id = req.user.id
    const [[rawPassword]] = await selectPassUserById(user_id)

    if (!rawPassword) {
      return res.json({ status: false, message: "ไม่พบรหัสผ่านเดิม" })
    } else if (!(await bcrypt.compare(oldpassword, rawPassword.password))) {
      return res.json({ status: false, message: "รหัสผ่านเดิมผิด" })
    }
    const password_encrypted = await bcrypt.hash(password, 5)
    await updateUserPass(password_encrypted, user_id);

    conn.commit()
    res.json({ status: true, message: "เปลี่ยนรหัสผ่านสำเร็จ" })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const profileSchema = Joi.object({
  firstname: Joi.string().required().max(100),
  lastname: Joi.string().required().max(100),
  phone: Joi.string()
    .required()
    .min(10)
    .max(10)
    .pattern(/^[0-9]+$/),
  lineid: Joi.string().max(100),
})

const updateProfile = async (req, res) => {
  try {
    await profileSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { firstname, lastname, phone, lineid } = req.body
    const user_id = req.user.id
    await updateUserProfile(firstname, lastname, phone, lineid, user_id)

    conn.commit()
    res.json({ status: true, message: "อัปเดตบัญชีสำเร็จ" })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const logout = async (req, res) => {
  await deleteTokens(req.user.id);
  res.json({ status: true, message: "ลงชื่อออกสำเร็จ" })
}

const getProfile = async (req, res) => {
  res.json(req.user)
}

const signinSchema = Joi.object({
  email: Joi.string().required().max(100).email(),
  password: Joi.string().required().min(5).max(20),
})

const signin = async (req, res) => {
  try {
    await signinSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { email, password } = req.body
    const [[user]] = await selectUserByEmail(email);

    if (!user?.email) {
      return res.json({ status: false, message: "ไม่มีอีเมลนี้ในระบบ" })
    } else if (!(await bcrypt.compare(password, user.password))) {
      return res.json({ status: false, message: "รหัสผ่านผิด" })
    } else {
      const [[tokens]] = await selectTokens(user.id)

      let token = tokens?.token
      if (!token) {
        token = jwt.sign(user.email, process.env.TOKEN_KEY)
        await addTokens(token, user.id)
      }

      conn.commit()
      res.json({
        status: true,
        message: "ลงชื่อเข้าใช้งานสำเร็จ",
        token: token,
      })
    }
    return
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const emailValidator = async (value, helpers) => {
  const [rows, _] = await pool.query(
    "SELECT email FROM users WHERE email = ?",
    [value]
  )
  if (rows.length > 0) {
    const message = "อีเมลนี้ถูกใช้งานแล้ว"
    throw new Joi.ValidationError(message, { message })
  }
  return value
}

const idcardValidator = async (value, helpers) => {
  const [rows, _] = await checkEmail(value)

  if (rows.length > 0) {
    const message = "รหัสบัตรประชาชนถูกใช้งานแล้ว"
    throw new Joi.ValidationError(message, { message })
  }
  return value
}

const signupSchema = Joi.object({
  fname: Joi.string().required().max(100),
  lname: Joi.string().required().max(100),
  idcard: Joi.string()
    .required()
    .min(13)
    .max(13)
    .pattern(/^[0-9]+$/)
    .external(idcardValidator),
  phone: Joi.string()
    .required()
    .min(10)
    .max(10)
    .pattern(/^[0-9]+$/),
  email: Joi.string().required().max(100).email().external(emailValidator),
  lineid: Joi.string().max(100),
  password: Joi.string().required().min(5).max(20),
  c_password: Joi.string().required().valid(Joi.ref("password")),
})

const signup = async (req, res) => {
  try {
    await signupSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { fname, lname, idcard, phone, email, lineid, password } = req.body
    const password_encrypted = await bcrypt.hash(password, 5)
    await addUser(fname, lname, idcard, phone, email, lineid, password_encrypted)
    
    conn.commit()
    res.json({ status: true, message: "ลงทะเบียนสำเร็จ" })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

module.exports = {
  changepassword,
  updateProfile,
  logout,
  getProfile,
  signin,
  signup,
}
