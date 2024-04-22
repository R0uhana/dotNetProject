const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flyhigh',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.get('/api/packages', (req, res) => {
  const query = 'SELECT * FROM packages';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/addBooking', (req, res) => {
  const  newData  = req.body;

  const query = 'INSERT INTO `bookings` SET ?;';
  connection.query(query, newData, (error, results) => {
    if (error) throw error;
    res.json({ message: 'Data added successfully', affectedRows: results.affectedRows });
  });
});

app.post('/api/addContact', (req, res) => {
  const  newData  = req.body;

  const query = 'INSERT INTO `contactentries` SET ?;';
  connection.query(query, newData, (error, results) => {
    if (error) throw error;
    res.json({ message: 'Data added successfully', affectedRows: results.affectedRows });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});