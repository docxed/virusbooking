const config = process.env
const express = require("express")
const pool = require("../config/database")
const Joi = require("joi")
const { isLoggedIn } = require("../middlewares")
const moment = require("moment")

router = express.Router()

router.put("/bedsdealing/customer/:id", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const bedsdealing_id = req.params.id
    const [[bedsdealing]] = await conn.query(
      `SELECT * FROM bedsdealing WHERE id = ?`,
      [bedsdealing_id]
    )
    let availableDate
    if (
      moment(new Date()).format("YYYY-MM-DD") >=
      moment(bedsdealing.date).format("YYYY-MM-DD")
    ) {
      availableDate = false
    } else {
      availableDate = true
    }
    if (!bedsdealing) {
      return res.json({
        status: false,
        message: "ไม่พบข้อมูล โปรดลองอีกครั้งในภายหลัง",
      })
    } else if (availableDate) {
      return res.json({
        status: false,
        message: "ยังไม่ถึงวันเข้าพัก",
      })
    } else {
      await conn.query(`UPDATE bedsdealing SET state=1 WHERE id = ?`, [
        bedsdealing_id,
      ])

      conn.commit()
      res.json({
        status: true,
        message: "ยืนยันผู้ใช้เข้าพักสำเร็จ",
      })
    }
    return
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
})

router.get("/bedsdealing/customer/:id", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    const [[bed]] = await conn.query(`SELECT * FROM beds WHERE id = ?`, [
      bed_id,
    ])
    const [customers] = await conn.query(
      `SELECT 
      bedsdealing.id AS 'bedsdealing_id',
      bedsdealing.state,
      bedsdealing.date,
      bedsdealing.timestamp,
      users.firstname,
      users.lastname,
      users.phone,
      users.email,
      users.lineid
      FROM bedsdealing
      INNER JOIN users ON bedsdealing.user_id = users.id
      WHERE bedsdealing.bed_id = ?`,
      [bed_id]
    )
    conn.commit()
    res.json({
      status: true,
      message: "เรียกข้อมูลสำเร็จ",
      bed: bed,
      customers: customers,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
})

router.get("/bedsdealingByUser", isLoggedIn, async (req, res, next) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const user_id = req.user.id
    const [bedsdealing] = await conn.query(
      `SELECT 
      bedsdealing.id AS 'beddealings_id',
      bedsdealing.date,
      bedsdealing.state,
      bedsdealing.timestamp,
      beds.id AS 'beds_id',
      beds.amount,
      beds.address,
      beds.state AS 'beds_state',
      users.id AS 'users_id',
      users.firstname,
      users.lastname,
      users.phone,
      users.email,
      users.lineid
      FROM bedsdealing
      INNER JOIN beds ON bedsdealing.bed_id = beds.id
      INNER JOIN users ON beds.user_id = users.id
      WHERE bedsdealing.user_id = ?`,
      [user_id]
    )
    conn.commit()
    res.json({
      status: true,
      message: "เรียกข้อมูลสำเร็จ",
      bedsdealing: bedsdealing,
    })
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
})

const bedsdealingSchema = Joi.object({
  date: Joi.date().required().greater("now"),
  bed_id: Joi.number().required(),
  user_id: Joi.number().required(),
})

router.post("/bedsdealing", isLoggedIn, async (req, res, next) => {
  try {
    await bedsdealingSchema.validateAsync(req.body, { abortEarly: false })
  } catch (err) {
    return res.json({ status: false, message: err.message })
  }

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const { date, bed_id } = req.body
    const user_id = req.user.id
    const [[bed]] = await conn.query(
      "SELECT id, amount, state FROM beds WHERE id = ?",
      [bed_id]
    )
    const [[bedsdealing]] = await conn.query(
      "SELECT bed_id FROM bedsdealing WHERE bed_id = ?",
      [bed_id]
    )
    if (!bed) {
      return res.json({
        status: false,
        message: "ไม่พบเตียง โปรดลองอีกครั้งในภายหลัง",
      })
    } else if (!bed.amount > 0) {
      return res.json({
        status: false,
        message: "ขออภัย ขณะนี้ไม่เหลือเตียงให้จอง",
      })
    } else if (!bed.state) {
      res.json({ status: false, message: "ขณะนี้ เตียงปิดการจองแล้ว" })
    } else if (bedsdealing) {
      return res.json({
        status: false,
        message: "ไม่ให้จองซ้ำ คุณจองสถานที่นี้ไปแล้ว",
      })
    } else {
      await conn.query("UPDATE beds SET amount=? WHERE id = ?", [
        bed.amount - 1,
        bed.id,
      ])
      await conn.query(
        "INSERT INTO bedsdealing(date, bed_id, user_id) VALUES (?, ?, ?)",
        [date, bed_id, user_id]
      )
      conn.commit()
      res.json({
        status: true,
        message: "ดำเนินการจองสำเร็จ",
      })
    }
    return
  } catch (err) {
    conn.rollback()
    res.status(400).json(err.toString())
  } finally {
    conn.release()
  }
})

exports.router = router
