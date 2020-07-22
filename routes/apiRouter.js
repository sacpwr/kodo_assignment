"use strict";

const router = express.Router();

const kodoController     = require('../controllers/kodoController')


router.use((req,res,next)=>{
    console.log(req.path)
    next();
})

router.post("/upload-kodo-data", kodoController.uploadKodoData);

module.exports = router;