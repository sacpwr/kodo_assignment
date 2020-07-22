
const commonHelper = require("../helpers/commonHelper");
const models = require("../models");
const sequelize = models.sequelize;
const moment = require('moment')

/* upload data */
exports.uploadKodoData = async (req,res)=>{
    return sequelize.transaction(async (t)=>{

        let data = req.body.data;

        for(let i=0; i<data.length; i++){
            let { name, image, description, dateLastEdited } = data[i];
    
            await models.KODOdata.create({
                name, image, description, dateLastEdited:moment(dateLastEdited)
            },{
                transaction : t
            });            
        }

    }).then(()=>{
        res.json(
            commonHelper.responseFormat(true, {}, {}, `Data Uploaded`)
          );
    }).catch((exp)=>{
        console.log("upload data error : ",exp)
        res.json(
            commonHelper.responseFormat(false, {}, {}, `Something went Wrong`)
          );
    })
}

exports.addFullTextIndex = async ()=>{
    sequelize.query('ALTER TABLE kodo_assignment.kodo_data ADD FULLTEXT(name, description)').then(console.log).catch(console.log);
}
