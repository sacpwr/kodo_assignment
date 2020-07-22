"use strict";

global.express = require('express');
const rootPath = require('path');
const app = express();
global.appRoot = rootPath.resolve(__dirname);
var bodyParser = require('body-parser')
const apiRouter = require(appRoot + '/routes/apiRouter');
const port = 3000;
const cors         =  require('cors');
var models = require('./models');
const kodoController = require('./controllers/kodoController')

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

//cors headers set
const moment = require("moment");
app.use((req,res,next)=>{
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Expose-Headers", "*");
	res.setHeader("Server-Timestamp", moment().unix());
	next();
});

app.use('/api/v1/', apiRouter);

//sync tables with database
models.sequelize.sync().then(async function () {
	await kodoController.addFullTextIndex() //set fulltext index on name and description in kodo_data table
	app.listen(port, () => {
		console.log('Server is up on ' + port)
	});
});