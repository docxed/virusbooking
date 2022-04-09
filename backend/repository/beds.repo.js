const pool = require("../config/database");
const conn = pool.getConnection();

const selectBedsReady = () => conn.query(
    "SELECT * FROM beds WHERE amount > 0 AND state = 1"
  );

const selectBedsSearch = (search) => conn.query(
    "SELECT * FROM beds WHERE amount > 0 AND state = 1 AND address LIKE ?",
    [search]
  );

const deleteBedById = (bed_id) => conn.query(
    "DELETE FROM beds WHERE id = ?", [bed_id]
  );

const updateBedsAddress = (address, lat, lng, bed_id) => conn.query("UPDATE beds SET address=?, lat=?, lng=? WHERE id = ?", [
    address,
    lat,
    lng,
    bed_id,
  ]);

const updateBedsAmount = (amount, bed_id) => conn.query(
    "UPDATE beds SET amount=? WHERE id = ?", [amount, bed_id]
  );

const selectBedsDetail = (bed_id) => conn.query(
    `SELECT 
    beds.id, beds.amount, beds.address, beds.lat, beds.lng, beds.state, beds.user_id, beds.timestamp, 
    users.firstname, users.lastname, users.idcard, users.phone, users.email, users.lineid
    FROM beds INNER JOIN users ON user_id=users.id WHERE beds.id = ?;`,
    [bed_id]
  );

const updateBedsState = (state, bed_id) => conn.query(
    "UPDATE beds SET state=? WHERE id = ?", [state, bed_id]
  );

const selectBedsByUser = (user_id) => conn.query(
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
  );

const insertBed = (amount, address, lat, lng, user_id) => conn.query(
    "INSERT INTO beds(amount, address, lat, lng, user_id) VALUES (?, ?, ?, ?, ?)",
    [amount, address, lat, lng, user_id]
  );

module.exports = {
    selectBedsReady,
    selectBedsSearch,
    deleteBedById,
    updateBedsAddress,
    updateBedsAmount,
    selectBedsDetail,
    updateBedsState,
    selectBedsByUser,
    insertBed,
}