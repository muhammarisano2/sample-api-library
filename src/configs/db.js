const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'eno',
  password: 'Qwer1234#',
  database: 'library2'
});

connection.connect((err)=>{
  if(err) console.log(`Error MYSQL : ${err}`)
});

module.exports = connection;