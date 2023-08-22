import { AppDataSource}  from "./data-source"
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// const dataSource = require('./routes');
const router = require('./routes/rout')


app.use(router);
// app.use(dataSource);

app.listen(3000);