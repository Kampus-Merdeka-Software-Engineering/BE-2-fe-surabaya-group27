require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoutes = require('./routes/newsroutes');

app.use(bookRoutes);

require('./routes/writer,routes')(app);
require('./routes/article,routes')(app);
require('./routes/categories,routes')(app);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
