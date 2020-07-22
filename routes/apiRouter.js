"use strict";

const router = express.Router();

const kodoController     = require('../controllers/kodoController')


router.use((req,res,next)=>{
    console.log(req.path)
    next();
})

/* insert data */
router.post("/upload-kodo-data", kodoController.uploadKodoData);

//search in kodo_data table with pagination
router.post("/search-kodo-data", kodoController.searchOnData);

module.exports = router;