import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'b1k45ftixzyhtyj6hkjc-mysql.services.clever-cloud.com',
  user: process.env.MYSQL_USER || 'uqrn5xhics6rjk35',
  password: process.env.MYSQL_PASSWORD || '7DKawOSf0w0imSW5zV2c',
  database: process.env.MYSQL_DATABASE || 'b1k45ftixzyhtyj6hkjc',
  port: process.env.MYSQL_PORT || 3306,
}).promise();

export default pool;

export async function GetAllData() {
  const [rows] = await pool.query('SELECT * FROM Recipes');
  return rows;
}

export async function getbyid(id) {
  if (typeof id !== 'number' || !Number.isInteger(id)) {
    console.log('You added a non-integer value');
    return;
  }

  const [rows] = await pool.query('SELECT * FROM Recipes WHERE recipe_id = ?', [id]);
  return rows;
}

export async function AddRecipe(title, ingredients, instructions) {
  const [result] = await pool.query('INSERT INTO Recipes (title, ingredients, instructions) VALUES (?, ?, ?)', [title, ingredients, instructions]);
  return getbyid(result.insertId);
}
