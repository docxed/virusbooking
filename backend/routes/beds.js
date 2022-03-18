const config = process.env
const express = require("express")
const pool = require("../config/database")
const Joi = require("joi")
const { isLoggedIn } = require("../middlewares")

router = express.Router()

router.get("/beds/available", async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const [beds] = await conn.query(
      "SELECT * FROM beds WHERE amount > 0 AND state = 1"
    )
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
})

router.get("/beds/search", async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const search = `%${req.query.search}%`
    const [beds] = await conn.query(
      "SELECT * FROM beds WHERE amount > 0 AND state = 1 AND address LIKE ?",
      [search]
    )
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
})

router.delete("/bed/:id", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    await conn.query("DELETE FROM beds WHERE id = ?", [bed_id])
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
})

const bedAddressSchema = Joi.object({
  address: Joi.string().required(),
  lat: Joi.required(),
  lng: Joi.required(),
})

router.put("/bed/address/:id", isLoggedIn, async (req, res, next) => {
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
    await conn.query("UPDATE beds SET address=?, lat=?, lng=? WHERE id = ?", [
      address,
      lat,
      lng,
      bed_id,
    ])
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
})

const bedAmountSchema = Joi.object({
  amount: Joi.number().required().min(0).max(9999),
})

router.put("/bed/amount/:id", isLoggedIn, async (req, res, next) => {
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
    await conn.query("UPDATE beds SET amount=? WHERE id = ?", [amount, bed_id])
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
})

router.get("/bed/:id", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    const [[bed]] = await conn.query("SELECT * FROM beds WHERE id = ?", [
      bed_id,
    ])
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
})

router.put("/bed/state/:id", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    let { state } = req.body
    const bed_id = req.params.id
    await conn.query("UPDATE beds SET state=? WHERE id = ?", [state, bed_id])
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
})

router.get("/bedsByUser", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const user_id = req.user.id
    const [beds] = await conn.query("SELECT * FROM beds WHERE user_id = ?", [
      user_id,
    ])
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
})

const bedsSchema = Joi.object({
  amount: Joi.number().required().min(1).max(9999),
  address: Joi.string().required(),
  lat: Joi.required(),
  lng: Joi.required(),
})

router.post("/beds", isLoggedIn, async (req, res, next) => {
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
    await conn.query(
      "INSERT INTO beds(amount, address, lat, lng, user_id) VALUES (?, ?, ?, ?, ?)",
      [amount, address, lat, lng, user_id]
    )
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
})

exports.router = router
