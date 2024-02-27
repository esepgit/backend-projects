const pool = require('../config')

const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.status(200).json(result.rows);
};

const getUserById = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  res.json(result.rows[0])
}

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.json({
    message: "user added successfully",
    body: {name, email}
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('DELETE FROM users WHERE id = $1', [id])
  res.json({
    message: 'user deleted successfully'
  })
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]
    )
  res.json({
    message: 'user updated successfully'
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};
