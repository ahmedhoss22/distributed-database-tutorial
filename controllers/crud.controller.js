const { poolPromise } = require('../config/db.config');

// Get all records
exports.getAllRecords = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM YourTableName');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Add a new record
exports.addRecord = async (req, res) => {
  const { column1, column2 } = req.body;
  try {
    const pool = await poolPromise;
    await pool
      .request()
      .query(`INSERT INTO YourTableName (Column1, Column2) VALUES ('${column1}', '${column2}')`);
    res.send('Record added successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a record
exports.updateRecord = async (req, res) => {
  const { id, column1, column2 } = req.body;
  try {
    const pool = await poolPromise;
    await pool
      .request()
      .query(`UPDATE YourTableName SET Column1 = '${column1}', Column2 = '${column2}' WHERE Id = ${id}`);
    res.send('Record updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a record
exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await poolPromise;
    await pool.request().query(`DELETE FROM YourTableName WHERE Id = ${id}`);
    res.send('Record deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
