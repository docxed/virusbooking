const pool = require("../config/database")

const selectBedsdealingById = async (bedsdealing_id) => {
  const conn = await pool.getConnection()
  return conn.query(`SELECT * FROM bedsdealing WHERE id = ?`, [bedsdealing_id])
}

const updateBedsdealing = async (bedsdealing_id) => {
  const conn = await pool.getConnection()
  return conn.query(`UPDATE bedsdealing SET state=1 WHERE id = ?`, [
    bedsdealing_id,
  ])
}

const customerBedsdealing = async (bed_id) => {
  const conn = await pool.getConnection()
  return conn.query(
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
}

const bedsdealingByUserId = async (user_id) => {
  const conn = await pool.getConnection()
  return conn.query(
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
}

const selectBedsdealingBedIdByBedId = async (bed_id) => {
  const conn = await pool.getConnection()
  return conn.query("SELECT bed_id FROM bedsdealing WHERE bed_id = ?", [bed_id])
}

const insertBedsdealing = async (date, bed_id, user_id) => {
  const conn = await pool.getConnection()
  return conn.query(
    "INSERT INTO bedsdealing(date, bed_id, user_id) VALUES (?, ?, ?)",
    [date, bed_id, user_id]
  )
}

const selectBedsdealingByBedId = async (bed_id) => {
  const conn = await pool.getConnection()
  return conn.query("SELECT * FROM bedsdealing WHERE bed_id = ?", [bed_id])
}

module.exports = {
  selectBedsdealingById,
  updateBedsdealing,
  customerBedsdealing,
  bedsdealingByUserId,
  selectBedsdealingBedIdByBedId,
  insertBedsdealing,
  selectBedsdealingByBedId,
}
