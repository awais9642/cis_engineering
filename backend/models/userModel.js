import db from "../config/db.js";

export const createUser = (fullname, email, password, callback) => {
  const sql = "INSERT INTO signup  (fullname, email, password) VALUES (?, ?, ?)";
  db.query(sql, [fullname, email, password], callback);
};

export const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM signup  WHERE email = ?";
  db.query(sql, [email], callback);
};