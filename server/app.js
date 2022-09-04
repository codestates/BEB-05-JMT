const express = require('express');
const cors = require("cors");
const indexRouter = require('./route/index');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

//Error Handling
app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
})
