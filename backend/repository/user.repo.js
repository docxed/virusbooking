const pool = require("../config/database")

const selectPassUserById = async (user_id) => {
  const conn = await pool.getConnection()
  return conn.query("SELECT password FROM users WHERE id = ?", [user_id])
}

const updateUserPass = async (password_encrypted, user_id) => {
  const conn = await pool.getConnection()
  return conn.query("UPDATE users SET password=? WHERE id = ?", [
    password_encrypted,
    user_id,
  ])
}

const updateUserProfile = async (
  firstname,
  lastname,
  phone,
  lineid,
  user_id
) => {
  const conn = await pool.getConnection()
  return conn.query(
    "UPDATE users SET firstname=?, lastname=?, phone=?, lineid=? WHERE id = ?",
    [firstname, lastname, phone, lineid, user_id]
  )
}

const deleteTokens = async (user_id) => {
  await pool.query("DELETE FROM tokens WHERE user_id = ? ", [user_id])
}

const selectUserByEmail = async (email) => {
  const conn = await pool.getConnection()
  return conn.query("SELECT id, email, password FROM users WHERE email = ?", [
    email,
  ])
}

const selectTokens = async (user_id) => {
  const conn = await pool.getConnection()
  return conn.query("SELECT token FROM tokens WHERE user_id = ?", [user.id])
}

const addTokens = async (token, user_id) => {
  const conn = await pool.getConnection()
  return conn.query("INSERT INTO tokens(token, user_id) VALUES (?, ?)", [
    token,
    user_id,
  ])
}

const checkEmail = async (email) => {
  return pool.query("SELECT email FROM users WHERE email = ?", [email])
}

const checkIdcard = async (idcard) => {
    const [rows, _] = await pool.query("SELECT idcard FROM users WHERE idcard = ?", [idcard])
    return rows
}                                                                                                                                                                       

const addUser = async (
  fname,
  lname,
  idcard,
  phone,
  email,
  lineid,
  password_encrypted
) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    await conn.query(
      "INSERT INTO users(firstname, lastname, idcard, phone, email, lineid, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fname, lname, idcard, phone, email, lineid, password_encrypted]
    )
    conn.commit()
    // res.json({ status: true, message: "ลงทะเบียนสำเร็จ" })
    return {
      status: true,
      message: "ลงทะเบียนสำเร็จ",
    }
  } catch (err) {
    conn.rollback()
    // res.status(400).json(err.toString())
    return {
      status: false,
      message: err.toString(),
    }
  } finally {
    conn.release()
  }
}

module.exports = {
  selectPassUserById,
  updateUserPass,
  updateUserProfile,
  deleteTokens,
  selectUserByEmail,
  selectTokens,
  addTokens,
  checkEmail,
  checkIdcard,
  addUser,
}
