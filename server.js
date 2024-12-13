const express = require('express');
const bodyParser = require('body-parser');
const crudRoutes = require('./routes/crud.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', crudRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
