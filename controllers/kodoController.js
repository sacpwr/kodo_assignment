
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

/* add full text index to name, description column in kodo_data table */
exports.addFullTextIndex = async ()=>{
    sequelize.query('ALTER TABLE kodo_data ADD FULLTEXT(name, description)').then(console.log).catch(console.log);
}

exports.searchOnData = async (req,res)=>{
 
    try{


        let { pageNumber, pageSize, searchText } = req.body;

        // validation
        if (isNaN(pageNumber)) { 
            throw { msg: "Invalid pageNumber" };
        }
        if (isNaN(pageSize)) {
            throw { msg: "Invalid pageSize" };
        }
        if(searchText == null || searchText == undefined){
            searchText = "";
        }

        //pagination setting
        let limit = pageSize;
        let offset = pageSize * (pageNumber - 1);

        let query = "", queryPaginationCount = "";
        if(searchText != ""){//if search test is not blank then find records by search text

            //check quotes have or not in string
            let isQuoteFound = searchText[0] == "\"" && searchText[searchText.length - 1] == "\""


            if(!isQuoteFound){//if quote not found then search by fulltext index
                query = `
                SELECT 
                id,
                name,
                image,
                description,
                date_last_edited dateLastEdited           
                FROM kodo_data
                WHERE MATCH (name, description) AGAINST ('${searchText}')
                order by name, description
                LIMIT ${limit} OFFSET ${offset};`

                queryPaginationCount=`
                SELECT 
                count(*) count          
                FROM kodo_data
                WHERE MATCH (name, description) AGAINST ('${searchText}');
                `;
            }else{ //if quote found then search for exact match
                searchText=searchText.substring(1, searchText.length-2)
                query = `
                SELECT 
                id,
                name,
                image,
                description,
                date_last_edited dateLastEdited
                FROM kodo_assignment.kodo_data
                WHERE  name like '%${searchText}%' or
                description like '%${searchText}%'
                order by name, description
                LIMIT ${limit} OFFSET ${offset};`

                queryPaginationCount = `
                SELECT 
                count(*) count
                FROM kodo_assignment.kodo_data
                WHERE  name like '%${searchText}%' or
                description like '%${searchText}%';
                `;
            }
        }else{ //if search text not given then give record by pagination only

                query = `
                SELECT 
                id,
                name,
                image,
                description,
                date_last_edited dateLastEdited
                FROM kodo_assignment.kodo_data
                order by name, description
                LIMIT ${limit} OFFSET ${offset};`

                queryPaginationCount = `
                SELECT 
                count(*) count
                FROM kodo_assignment.kodo_data;
                `;

        }

        //search data
        let searchData = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
        
        //pagination count
        let paginationCount  = await sequelize.query(queryPaginationCount, { type: sequelize.QueryTypes.SELECT });

        res.json(
            commonHelper.responseFormat(
                true, 
                {
                    data : searchData,
                    paginationCount : paginationCount[0].count
                }, 
                {}, 
                searchData.length > 0 ? "Data found" : "Data not found"
            )
          );
    }catch(exp){
        console.log("search data error : ",exp)
        res.json(commonHelper.responseFormat(false, {}, {}, exp.msg != null? exp.msg : `Something went Wrong`));
    }
}