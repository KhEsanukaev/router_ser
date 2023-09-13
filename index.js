// файл index.js

const express = require("express");

const app = express();

app.use(require("./routes/brands.route"));
app.use(require("./routes/products.route"));

app.listen(4000, () => console.log('server start'));