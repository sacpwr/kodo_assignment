"use strict";

const router = express.Router();

const multipart          = require('connect-multiparty');
const multipartMiddlewareSac = multipart({
    uploadDir: appRoot+'/files'
});

router.use((req,res,next)=>{
    console.log(req.path)
    next();
})

router.post("/upload-kodo-data", multipartMiddleware, kodoController.uploadKodoData);

module.exports = router;