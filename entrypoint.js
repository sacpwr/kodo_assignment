"use strict";

global.express = require('express');
const rootPath = require('path');
const app = express();
global.appRoot = rootPath.resolve(__dirname);
var bodyParser = require('body-parser')
const apiRouter = require(appRoot + '/routes/apiRouter');
const port = 8009;
const cors         =  require('cors');
var models = require('./models');

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

const moment = require("moment");
app.use((req,res,next)=>{
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Expose-Headers", "*");
	res.setHeader("Server-Timestamp", moment().unix());
	next();
});

app.use('/api/v1/', apiRouter);

models.sequelize.sync().then(function () {
	app.listen(port, () => {
		console.log('Server is up on ' + port)
	});
});