const pool = require("../config/database")
const Joi = require("joi")

const { 
  selectBedsReady, 
  selectBedsSearch, 
  deleteBedById, 
  updateBedsAddress, 
  updateBedsAmount,
  selectBedsDetail,
  updateBedsState,
  selectBedsByUser,
  insertBed,
} = require('../repository/beds.repo')

const getBedsAvailable = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const [beds] = await selectBedsReady();
    conn.commit()
    res.json({
      status: true,
      message: "ค้นหาข้อมูลสำเร็จ",
      beds: beds,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const getBedsSearch = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const search = `%${req.query.search}%`
    const [beds] = await selectBedsSearch(search);
    conn.commit()
    res.json({
      status: true,
      message: "ค้นหาข้อมูลสำเร็จ",
      beds: beds,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const deleteBed = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    const [bedsdealing] = await conn.query(
      "SELECT * FROM bedsdealing WHERE bed_id = ?",
      [bed_id]
    )
    if (bedsdealing.length > 0) {
      return res.json({
        status: false,
        message: "ไม่สามารถลบได้เนื่องจากมีผู้เข้าจองแล้ว",
      })
    }
    await deleteBedById(bed_id);
    conn.commit()
    res.json({
      status: true,
      message: "ลบข้อมูลแล้ว",
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const bedAddressSchema = Joi.object({
  address: Joi.string().required(),
  lat: Joi.required(),
  lng: Joi.required(),
})

const changeBedAddress = async (req, res) => {
  try {
    await bedAddressSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { address, lat, lng } = req.body
    const bed_id = req.params.id
    await updateBedsAddress(address, lat, lng, bed_id)
    conn.commit()
    res.json({
      status: true,
      message: "เปลี่ยนที่อยู่สถานที่สำเร็จ",
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const bedAmountSchema = Joi.object({
  amount: Joi.number().required().min(0).max(9999),
})

const changeAmountBed = async (req, res) => {
  try {
    await bedAmountSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { amount } = req.body
    const bed_id = req.params.id
    await updateBedsAmount(amount, bed_id)
    conn.commit()
    res.json({
      status: true,
      message: "เปลี่ยนจำนวนเตียงสำเร็จ",
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const getBedDetail = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    const [[bed]] = await selectBedsDetail(bed_id)
    conn.commit()
    res.json({
      status: true,
      message: "เรียกข้อมูลสำเร็จ",
      bed: bed,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const changeStateBed = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    let { state } = req.body
    const bed_id = req.params.id
    await updateBedsState(state, bed_id)
    conn.commit()
    res.json({
      status: true,
      message: "เปลี่ยนสถานะเตียงสำเร็จ",
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const getBedsByUser = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const user_id = req.user.id
    const [beds] = await selectBedsByUser(user_id)
    conn.commit()
    res.json({
      status: true,
      message: "เรียกข้อมูลสำเร็จ",
      beds: beds,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

const bedsSchema = Joi.object({
  amount: Joi.number().required().min(1).max(9999),
  address: Joi.string().required(),
  lat: Joi.required(),
  lng: Joi.required(),
})

const addBed = async (req, res) => {
  try {
    await bedsSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { amount, address, lat, lng } = req.body
    const user_id = req.user.id
    await insertBed(amount, address, lat, lng, user_id)
    conn.commit()
    res.json({
      status: true,
      message: "เพิ่มสถานที่สำเร็จ",
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
}

module.exports = {
  getBedsAvailable,
  getBedsSearch,
  deleteBed,
  changeBedAddress,
  changeAmountBed,
  getBedDetail,
  changeStateBed,
  getBedsByUser,
  addBed,
}
