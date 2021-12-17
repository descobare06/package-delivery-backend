const express = require('express');
import indexRoutes from './routes/index.routes';
const morgan = require('morgan');
const app = express();
import "./database";

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(indexRoutes);

export default app;