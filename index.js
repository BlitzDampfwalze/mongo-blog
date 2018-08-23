const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true })); //for postman

app.use(bodyParser.json());

require('./blogPostsRouter')(app);

mongoose.connect('mongodb://localhost:27017/blog,',
    { useNewUrlParser: true },);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});