const pool = require("../config/database")
const Joi = require("joi")

const getBedsAvailable = async (req, res) => {
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
}

const getBedsSearch = async (req, res) => {
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
}

const getBedDetail = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const bed_id = req.params.id
    const [[bed]] = await conn.query(
      `SELECT 
      beds.id, beds.amount, beds.address, beds.lat, beds.lng, beds.state, beds.user_id, beds.timestamp, 
      users.firstname, users.lastname, users.idcard, users.phone, users.email, users.lineid
      FROM beds INNER JOIN users ON user_id=users.id WHERE beds.id = ?;`,
      [bed_id]
    )
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
}

const getBedsByUser = async (req, res) => {
  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
    const user_id = req.user.id
    const [beds] = await conn.query(
      `SELECT 
      beds.id AS 'id',
      beds.amount,
      beds.address,
      beds.lat,
      beds.lng,
      beds.state,
      beds.timestamp,
      COUNT(bedsdealing.id) AS 'customer_amount'
      FROM beds
      LEFT JOIN bedsdealing ON beds.id = bedsdealing.bed_id
      WHERE beds.user_id = ?
      GROUP BY beds.id`,
      [user_id]
    )
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
  addBed
}
