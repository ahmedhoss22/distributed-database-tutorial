const sql = require('mssql');

// Database configuration
const config = {
  user: 'sa', // SQL Server username
  password: 'YourStrongPassword123', // SQL Server password
  server: 'HOSS', // Server name or IP
  database: 'Inventory', // Replace with your database name
  port: 1434, // SQL Server port
  options: {
    encrypt: false, // Set true for Azure, false for local SQL Server
    trustServerCertificate: true, // True for local development
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed:', err.message);
    process.exit(1);
  });

module.exports = {
  sql,
  poolPromise,
};
