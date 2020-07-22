const chai = require('chai');
const request = require('request');
const assert = chai.assert;
var fs = require('fs');
const expect = require('chai').expect;
let timeout = 15000;
let headers = {
    uid: 'deekshith.kgr95@gmail.com',
    access_token: 'a6tCfF5T7HVIdx8Czd6I7w',
    client: 'osUe4ObG0a1QvZ4R9-t6yg'
}

describe('/site/active-inactive/:siteId Testing', () => {
    it('should return error if operation param value is wrong', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site/active-inactive/1433",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Site Id")
            done()
        })
    })

    it('should return error if operation param value is not given', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site/active-inactive",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(404, res.statusCode);
            done()
        })
    })

    it('should return error if operation param value is right', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site/active-inactive/143",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            done()
        })
    })

})


describe('/customer-status/:customerId Testing', () => {
    it('should return error if operation param value is wrong', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/customer-status/1433",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Customer Id")
            done()
        })
    })

    it('should return error if operation param value is not given', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/customer-status",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(404, res.statusCode);
            done()
        })
    })

    it('should return error if operation param value is right', (done) => {
        // this.timeout(15000)
        request.delete({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/customer-status/119",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            done()
        })
    })

})


describe('/site/:siteId Testing', () => {
    it('should return error if operation param value is wrong', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site/1433",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Site Id")
            done()
        })
    })

    it('should return error if operation param value is not given', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(404, res.statusCode);
            done()
        })
    })

    it('should return error if operation param value is right', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/site/143",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            done()
        })
    })

})

/* 
employee id must be in number
employee id must be in emplloyees table
employee id must be in users table
employee id is right then it must get Activated or Deactivated
*/
//url: "localhost:8008/api/v1/employee/active-inactive/8195",
describe('/api/v1/employee/active-inactive/:id Testing', () => {

    it('employee id must be in number', (done) => {
        request.delete({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/active-inactive/abc",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id must be in emplloyees table', (done) => {
        request.delete({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/active-inactive/819544",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id must be in users table', (done) => {
        request.delete({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/active-inactive/819544",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id is right then it must get Activated or Deactivated', (done) => {
        request.delete({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/active-inactive/8195",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            done()
        })
    }).timeout(timeout)

})

/* 
employee id must be in number
employee id must be in emplloyees table
employee id must be in users table
employee id is right then it must get employee details
*/
describe('/api/v1/employee/:id Testing', () => {

    it('employee id must be in number', (done) => {
        request.get({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/abc",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id must be in emplloyees table', (done) => {
        request.get({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/819544",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id must be in users table', (done) => {
        request.get({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/819544",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('employee id is right then it must get employee details', (done) => {
        request.get({
            headers: headers,
            url: "http://localhost:8008/api/v1/employee/8195",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data, 'empData')
            done()
        })
    }).timeout(timeout)

})

/* 
pageNo must be in number
pageSize must be in number
pageNo and pageSize is right then it must get employee details list 
*/
describe('/api/v1/employees Testing', () => {

    it('pageNo must be in number', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/employees",
            json: true,
            body: {
                pageNo:'aa',
                pageSize:10
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Invalid pageNo")
            done()
        })
    }).timeout(timeout)

    it('pageSize must be in number', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/employees",
            json: true,
            body: {
                pageNo:1,
                pageSize:'dsdsd'
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Invalid pageSize")
            done()
        })
    }).timeout(timeout)

    it('pageNo and pageSize is right then it must get employee details list', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/employees",
            json: true,
            body: {
                pageNo:1,
                pageSize:10
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data, "empDataList")
            done()
        })
    }).timeout(timeout)

})

/* 
employeeId should be in number format
employeeId should be valid
fromDate must DD-MM-YYYY format
toDate must DD-MM-YYYY format
fromDate must lesser than toDat
data.loginLogoutSiteList.{siteId}.initial must be exist
data.loginLogoutSiteList.{siteId}.selected must be exist
data.siteList must be exist
*/
describe('/get-setup-schedule-list Testing', () => {
    it('employeeId should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": "82011A",
                "fromDate": "17-05-2020",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Employee Id must be numeric")
            done()
        })
    }).timeout(timeout)

    it('employeeId should be valid', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 82011,
                "fromDate": "17-05-2020",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Employee Id is invalid")
            done()
        })
    }).timeout(timeout)

    it('fromDate must DD-MM-YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 82011,
                "fromDate": "2020-05-20",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Date")
            done()
        })
    }).timeout(timeout)

    it('toDate must DD-MM-YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 82011,
                "fromDate": "17-05-2020",
                "toDate": "2020-05-20"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Date")
            done()
        })
    }).timeout(timeout)

    it('fromDate must lesser than toDat', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 8201,
                "fromDate": "17-05-2020",
                "toDate": "15-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"From Date is must be lesser than To Date")
            done()
        })
    }).timeout(timeout)

    it('data.loginLogoutSiteList.{siteId}.initial must be exist', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 8201,
                "fromDate": "17-05-2020",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"loginLogoutSiteList")
            assert.property(body.data.loginLogoutSiteList,"138")
            assert.property(body.data.loginLogoutSiteList["138"],"initial")
            done()
        })
    }).timeout(timeout)

    it('data.loginLogoutSiteList.{siteId}.selected must be exist', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 8201,
                "fromDate": "17-05-2020",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"loginLogoutSiteList")
            assert.property(body.data.loginLogoutSiteList,"138")
            assert.property(body.data.loginLogoutSiteList["138"],"selected")
            done()
        })
    }).timeout(timeout)

    it('data.siteList must be exist', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/get-setup-schedule-list",
            json: true,
            body: {
                "employeeId": 8201,
                "fromDate": "17-05-2020",
                "toDate": "23-05-2020"
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"siteList")
            done()
        })
    }).timeout(timeout)

})

/* 
Phone number should not be blank
Phone number should be in proper format
if Phone number exist then response msg : "Phone number already exist"
if Phone number available then response msg : "Phone number already available"
*/
describe('/business_associate/check-phone Testing', () => {
    it('Phone number should not be blank', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-phone",
            json: true,
            body: { baId : 0 , phone:null}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Phone number")
            done()
        })
    })

    it('Phone number should be in proper format', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-phone",
            json: true,
            body: { baId : 0 , phone:"abc"}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Phone number")
            done()
        })
    })

    it('if Phone number exist then response msg : "Phone number already exist"', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-phone",
            json: true,
            body: { baId : 0 , phone:7845645659}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Phone number already exist")
            done()
        })
    })

    it('if Phone number available then response msg : "Phone number already available"', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-phone",
            json: true,
            body: { baId : 0 , phone:7845645651}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.equal(body.message,"Phone number is available")
            done()
        })
    })

})

/* 
email id should not be blank
email id should be in proper format
if email id exist then response msg : "Email Id already exist"
if email id available then response msg : "Email Id already available"
*/
describe('/business_associate/check-email Testing', () => {
    it('email id should not be blank', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-email",
            json: true,
            body: { baId : 0 , email:null}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Email")
            done()
        })
    })

    it('email id should be in proper format', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-email",
            json: true,
            body: { baId : 0 , email:"abc"}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Email")
            done()
        })
    })

    it('if email id exist then response msg : "Email Id already exist"', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-email",
            json: true,
            body: { baId : 0 , email:"indrush@ektatravels.com"}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Email Id already exist")
            done()
        })
    })

    it('if email id available then response msg : "Email Id already available"', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/business_associate/check-email",
            json: true,
            body: { baId : 0 , email:"indrush111@ektatravels.com"}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.equal(body.message,"Email Id is available")
            done()
        })
    })

})

/* 
date should not be in empty
date should be in DD-MM-YYYY format
startTime should not be in empty
startTime should be in HH:mm format
endTime should not be in empty
endTime should be in HH:mm format
requestType should be in 0,1,2
tripType should be in 0,1
pageNo should not be empty
pageNo should be number
pageSize should not be empty
pageSize should be number
if all parameter wrong then requestList should responsed
*/
describe('/request-list Testing', () => {
    it('date should not be in empty', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"date can not be empty")
            done()
        })
    }).timeout(timeout)
    it('date should be in DD-MM-YYYY format', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "2020-12-12",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Date")
            done()
        })
    }).timeout(timeout)
    it('startTime should not be in empty', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"startTime can not be empty")
            done()
        })
    }).timeout(timeout)
    it('startTime should be in HH:mm format', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "34:66",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Time")
            done()
        })
    }).timeout(timeout)
    it('endTime should not be in empty', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"endTime can not be empty")
            done()
        })
    }).timeout(timeout)
    it('endTime should be in HH:mm format', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "33:33",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid Time")
            done()
        })
    }).timeout(timeout)
    it('requestType should be in 0,1,2', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": 4,
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid requestType")
            done()
        })
    }).timeout(timeout)
    it('tripType should be in 0,1', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": 3,
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid tripType")
            done()
        })
    }).timeout(timeout)
    it('pageNo should not be empty', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": "",
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"pageNo can not be empty")
            done()
        })
    }).timeout(timeout)
    it('pageNo should be number', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": "qq",
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid pageNo")
            done()
        })
    }).timeout(timeout)
    it('pageSize should not be empty', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": ""
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"pageSize can not be empty")
            done()
        })
    }).timeout(timeout)
    it('pageSize should be number', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": "aa"
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid pageSize")
            done()
        })
    }).timeout(timeout)
    it('if all parameter wrong then requestList should responsed', (done) => {        
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/request-list",
            json: true,
            body: {
                "date": "30-05-2020",
                "startTime": "00:00",
                "endTime": "23:59",
                "requestType": "",
                "tripType": "",
                "employeeName": "",
                "pageNo": 1,
                "pageSize": 10
            }
        }, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"requestList")
            done()
        })
    }).timeout(timeout)
})

/* 
businessAssociateId is required
businessAssociateId should be in number format
businessAssociateId should be valid id

siteId is required 
siteId should be in number format
siteId should be valid id

plateNumber is required 
plateNumber should be in string format
plateNumber should be unique

seatingCapacity is required 
seatingCapacity should be in string format

vehicleModel is required 
vehicleModel should be in string format
vehicleModel should be valid

vehicleType is required 
vehicleType should be in string format
vehicleType should be AC | NON AC

fuelType is required 
fuelType should be in string format
fuelType should be 'Petrol', 'Diesel', 'Electric', 'Hybrid'

vehicleColor should be 'BROWN', 'BLUE', 'BLACK', 'WHITE', 'SILVER', 'YELLOW', 'RED'

shiftStartTime is required 
shiftStartTime should be in string format
shiftStartTime should be HH:mm format
shiftStartTime should be valid between 00:00 and 23:59

shiftEndTime is required 
shiftEndTime should be in string format
shiftEndTime should be HH:mm format
shiftEndTime should be valid between 00:00 and 23:59

gpsId is required 
gpsId should be in string format
gpsId should be unique

gpsMaker is required 
gpsMaker should be in string format
gpsMaker should be 'MMI', 'Fleet Radar', 'Rooster', 'Generic', 'AOT/Fleet Vigil', 'Wheelseye', 'T4U', 'Axestrack', 'Ekfon'

kmAtInduction is required 
kmAtInduction should be in number format

lastServiceKm should be in number format

insuranceDate should be DD/MM/YYYY format
pucValidityDate should be DD/MM/YYYY format
commercialPermitExpiryDate should be DD/MM/YYYY format
roadTaxValidityDate should be DD/MM/YYYY format
fitnessValidityDate should be DD/MM/YYYY format
manufactureDate should be DD/MM/YYYY format
permitValidityDate should be DD/MM/YYYY format

permitType should be in 'state', 'national'

insuranceDocUrl is required
insuranceDocUrl file should in jpeg|jpg|gif|png|pdf extention format

rcBookDocUrl is required
rcBookDocUrl file should in jpeg|jpg|gif|png|pdf extention format

pucDocUrl is required
pucDocUrl file should in jpeg|jpg|gif|png|pdf extention format

commercialPermitDocUrl is required
commercialPermitDocUrl file should in jpeg|jpg|gif|png|pdf extention format

roadTaxDocUrl is required
roadTaxDocUrl file should in jpeg|jpg|gif|png|pdf extention format

fitnessDocUrl is required
fitnessDocUrl file should in jpeg|jpg|gif|png|pdf extention format

vehiclePictureUrl is required
vehiclePictureUrl file should in jpeg|jpg|gif|png|pdf extention format

kmDocUploadUploadUrl file should in jpeg|jpg|gif|png|pdf extention format
*/

describe('/vehicles/add Testing', () => {
    it('businessAssociateId is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                // businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'businessAssociateId' required is missing")
            done()
        })
    }).timeout(timeout)

    it('businessAssociateId should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:"baId",
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'businessAssociateId' value expected is 'Number'")
            done()
        })
    }).timeout(timeout)

    it('businessAssociateId should be valid id', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:355,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid businessAssociateId')
            done()
        })
    }).timeout(timeout)

    it('siteId is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                // siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'siteId' required is missing")
            done()
        })
    }).timeout(timeout)

    it('siteId should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:"AA",
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'siteId' value expected is 'Number'")
            done()
        })
    }).timeout(timeout)

    it('siteId should be valid id', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:1388,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid siteId')
            done()
        })
    }).timeout(timeout)

    it('plateNumber is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                // plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'plateNumber' required is missing")
            done()
        })
    }).timeout(timeout)

    it('plateNumber should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:11,
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'plateNumber' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it('plateNumber should be unique', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari2656",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Plate number already exist')
            done()
        })
    }).timeout(timeout)

    it('seatingCapacity is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                // seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'seatingCapacity' required is missing")
            done()
        })
    }).timeout(timeout)

    it('seatingCapacity should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:"A4",
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'seatingCapacity' value expected is 'Number'")
            done()
        })
    }).timeout(timeout)

    it('vehicleModel is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                // vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'vehicleModel' required is missing")
            done()
        })
    }).timeout(timeout)

    it('vehicleModel should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:11,
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'vehicleModel' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it('vehicleModel should be valid', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari2656",
                vehicleModel:"SUMOO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Vehicle Model name not found.')
            done()
        })
    }).timeout(timeout)

    it('vehicleType is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                // vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'vehicleType' required is missing")
            done()
        })
    }).timeout(timeout)

    it('vehicleType should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:1,
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'vehicleType' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it('vehicleType should be AC | NON AC', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"ACC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'vehicleType expected value AC or NON AC')
            done()
        })
    }).timeout(timeout)

    it('fuelType is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                // fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'fuelType' required is missing")
            done()
        })
    }).timeout(timeout)

    it('fuelType should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:1,
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'fuelType' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it("fuelType should be 'Petrol', 'Diesel', 'Electric', 'Hybrid'", (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric1",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'fuelType expected value Petrol or Diesel or Electric or Hybrid.')
            done()
        })
    }).timeout(timeout)

    it("vehicleColor should be 'BROWN', 'BLUE', 'BLACK', 'WHITE', 'SILVER', 'YELLOW', 'RED'", (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE1",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'vehicleColor expected value BROWN or BLUE or BLACK or WHITE or SILVER or YELLOW or RED.')
            done()
        })
    }).timeout(timeout)

    it('shiftStartTime is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                // shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'shiftStartTime' required is missing")
            done()
        })
    }).timeout(timeout)

    it('shiftStartTime should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:00,
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'shiftStartTime' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it('shiftStartTime should be in HH:mm format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"55:00",
                shiftEndTime:"23:59",
                gpsId:"MA123456711",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid shiftStartTime')
            done()
        })
    }).timeout(timeout)

    it('shiftStartTime should be valid between 00:00 and 23:59', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"23:60",
                shiftEndTime:"23:59",
                gpsId:"MA123456711",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid shiftStartTime')
            done()
        })
    }).timeout(timeout)

    it('shiftEndTime is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                // shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'shiftEndTime' required is missing")
            done()
        })
    }).timeout(timeout)

    it('shiftEndTime should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:22,
                gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'shiftEndTime' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it('shiftEndTime should be in HH:mm format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"55:00",
                gpsId:"MA123456711",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid shiftEndTime')
            done()
        })
    }).timeout(timeout)

    it('shiftEndTime should be valid between 00:00 and 23:59', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:60",
                gpsId:"MA123456711",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'Invalid shiftEndTime')
            done()
        })
    }).timeout(timeout)

    it('gpsId is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                // gpsId:"MA1234567",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'gpsId' required is missing")
            done()
        })
    }).timeout(timeout)

    it('gpsId should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:1,
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'gpsId' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it("gpsId should be unique", (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"233m2n32n",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'gpsId already exist')
            done()
        })
    }).timeout(timeout)

    it('gpsMaker is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                // gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'gpsMaker' required is missing")
            done()
        })
    }).timeout(timeout)

    it('gpsMaker should be in string format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA1234567",
                gpsMaker:1,
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'gpsMaker' value expected is 'String'")
            done()
        })
    }).timeout(timeout)

    it("gpsMaker should be 'MMI', 'Fleet Radar', 'Rooster', 'Generic', 'AOT/Fleet Vigil', 'Wheelseye', 'T4U', 'Axestrack', 'Ekfon'", (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye1",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'gpsMaker expected value MMI or Fleet Radar or Rooster or Generic or AOT/Fleet Vigil or  Wheelseye or T4U or Axestrack or Ekfon.')
            done()
        })
    }).timeout(timeout)

    it('kmAtInduction is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                // kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'kmAtInduction' required is missing")
            done()
        })
    }).timeout(timeout)

    it('kmAtInduction should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:"A1000",
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'kmAtInduction' value expected is 'Number'")
            done()
        })
    }).timeout(timeout)

    it('lastServiceKm should be in number format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"A1000",
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "lastServiceKm must be in number format")
            done()
        })
    }).timeout(timeout)

    it('insuranceDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"3100/12/20",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'insuranceDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('pucValidityDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/2021",
                pucValidityDate:"3100/12/20",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'pucValidityDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('commercialPermitExpiryDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"3100/12/20",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'commercialPermitExpiryDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('roadTaxValidityDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"3100/12/20",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'roadTaxValidityDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('fitnessValidityDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"3100/12/20",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'fitnessValidityDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('manufactureDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/1999",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"3100/12/20",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'manufactureDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it('permitValidityDate should be DD/MM/YYYY format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"AA56789",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Petrol",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"MMI",
                kmAtInduction:1000,
                lastServiceKm:"1000",
                insuranceDate:"31/12/2020",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"3100/12/20",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'permitValidityDate expected value date DD/MM/YYYY.')
            done()
        })
    }).timeout(timeout)

    it("permitType should be in 'state', 'national'", (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"ajaytiwari26561",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state1",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, 'permitType expected value state or national.')
            done()
        })
    }).timeout(timeout)

    it('insuranceDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                // insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'insuranceDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('insuranceDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "insuranceDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('rcBookDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'rcBookDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('rcBookDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "rcBookDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('pucDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'pucDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('pucDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "pucDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('commercialPermitDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'commercialPermitDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('commercialPermitDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "commercialPermitDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('roadTaxDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'roadTaxDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('roadTaxDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "roadTaxDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('fitnessDocUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'fitnessDocUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('fitnessDocUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "fitnessDocUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('vehiclePictureUrl is required', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH02842598",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                // vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "Parameter 'vehiclePictureUrl' value cannot be null")
            done()
        })
    }).timeout(timeout)

    it('vehiclePictureUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "vehiclePictureUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('kmDocUploadUploadUrl file should in jpeg|jpg|gif|png|pdf extention format', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/SHAWN GUO - JAVA.doc')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message, "kmDocUploadUploadUrl value expected URL and extension allow only jpeg|jpg|gif|png|pdf.")
            done()
        })
    }).timeout(timeout)

    it('if validation success then it should get registred', (done) => {
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/vehicles/add",
            formData:{
                businessAssociateId:35,
                siteId:138,
                seatingCapacity:4,
                plateNumber:"MH028425981",
                vehicleModel:"SUMO",
                vehicleType:"AC",
                fuelType:"Electric",
                vehicleColor:"WHITE",
                shiftStartTime:"00:00",
                shiftEndTime:"23:59",
                gpsId:"MA12345671",
                gpsMaker:"Wheelseye",
                kmAtInduction:1000,
                lastServiceKm:1000,
                insuranceDate:"31/12/2021",
                pucValidityDate:"31/12/2021",
                commercialPermitExpiryDate:"31/12/2021",
                roadTaxValidityDate:"31/12/2021",
                fitnessValidityDate:"31/12/2021",
                manufactureDate:"31/12/1999",
                permitValidityDate:"31/12/1999",
                permitType:"state",
                businessAreaId:1,
                insuranceDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                rcBookDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                pucDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                commercialPermitDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                roadTaxDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                fitnessDocUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                vehiclePictureUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf'),
                kmDocUploadUploadUrl:fs.createReadStream('/home/sachin/Downloads/VEHICLE DOCUMENTS_124506_4092 ins.pdf')
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            body=JSON.parse(body)
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.equal(body.message, "Vehicle Added successfully")
            done()
        })
    }).timeout(timeout)
})

/* 
vehicle id should be mention
vehicle id must be number
vehicle id must be valid
vehicle must be in induction status = draft
vehicle id is right then it must send response with vehicle key in data
*/

describe('/vehicles/find-draft-vehicle/:id Testing', () => {
    it('vehicle id should be mention', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/vehicles/find-draft-vehicle",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(404, res.statusCode);
            // assert.equal(body.success, false)
            // assert.equal(body.message,"Invalid Site Id")
            done()
        })
    })
    it('vehicle id must be number', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/vehicles/find-draft-vehicle/AA",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid vehicle id")
            done()
        })
    })
    it('vehicle id must be valid', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/vehicles/find-draft-vehicle/1111",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid vehicle id")
            done()
        })
    })
    it('vehicle must be in induction status = draft', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/vehicles/find-draft-vehicle/1",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Vehicle not in Draft status")
            done()
        })
    })
    it('vehicle id is right then it must send response with vehicle key in data', (done) => {
        // this.timeout(15000)
        request.get({
            headers: {
                "access_token": "fGq7nRaAiPuA_faLC6pW_g",
                "client": "SYE-vyxMzKpqsCJ2a3l2OA",
                "uid": "asdfafg@sdf.com"
            },
            url: "http://localhost:8008/api/v1/vehicles/find-draft-vehicle/63",
            json: true,
            body: {}
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"vehicle")
            done()
        })
    })
})

/* 
driverId must be valid
plateNumber should required
driver role must be exists in database
driverId should be valid
driver should be off duty
according plateNumber vehicle should found
vehicle should not have driver
driver should go on_duty if all condition is fullfilled
*/
describe('/driver/onduty/:driverId Testing', () => {

    it('driverId must be valid', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9410A",
            json: true,
            body: { plateNumber : "" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid driverId")
            done()
        })
    })
    it('plateNumber should required', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9410",
            json: true,
            body: { plateNumber : "" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid plateNumber")
            done()
        })
    })
    it('driver role must be exists in database', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9410",
            json: true,
            body: { plateNumber : "AA" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,'driver role not available')
            done()
        })
    })
    it('driverId should be valid', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/941000",
            json: true,
            body: { plateNumber : "AA" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,'Invalid driverId')
            done()
        })
    })
    it('driver should be off duty', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9409",
            json: true,
            body: { plateNumber : "AA" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,'Driver already on duty')
            done()
        })
    })
    it('according plateNumber vehicle should found', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9413",
            json: true,
            body: { plateNumber : "AA" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,'Vehicle not found')
            done()
        })
    })
    it('vehicle should not have driver', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9413",
            json: true,
            body: { plateNumber : "BDBS88888" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,'The vehicle is already in use')
            done()
        })
    })
    it('driver should go on_duty if all condition is fullfilled', (done) => {
        // this.timeout(15000)
        request.post({
            headers: headers,
            url: "http://localhost:8008/api/v1/driver/onduty/9413",
            json: true,
            body: { plateNumber : "MH01999999" }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true);
            done()
        })
    })
})

/* 
Invalid Trip change request Id
Invalid request state

Change Approve request must be have valid employee_trip
Change Approve request must be have valid employee_trip and not have trip assigned
Change Approve request must be login time after last trip logout time
If Employee trip found and and trip not assigned then it should get schedule change according request

Cancel Approve request must be have valid employee_trip
Cancel Approve request must be have valid employee_trip and not have trip assigned
If Employee trip found and and trip not assigned then it should get cancel

New Trip Approve request under that login/logout should not already defined
New Trip Approve request must be login time after last trip logout time
If new request is valid then it should get set new schedule

Change | Cancel | New Request Decline request should get declined
*/

describe("/request-approve-decline Testing", () => {
    it("Invalid Trip change request Id", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 1234,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Invalid tcrId");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Invalid request state", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 343,
            requestState: "approved1",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Invalid requestState");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Change Approve request must be have valid employee_trip", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 344,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Invalid Request");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Change Approve request must be have valid employee_trip and not have trip assigned", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 344,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(
            body.message,
            "Change Request Approval Declined because this schedule has used for further proceeds"
          );
          done();
        }
      );
    }).timeout(timeout);
  
    it("Change Approve request must be login time after last trip logout time", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 346,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(
            body.message,
            "Shift Schedule Not Possible because previous trip logout not done of  date 17-06-2020"
          );
          done();
        }
      );
    }).timeout(timeout);
  
    it("If Employee trip found and and trip not assigned then it should get schedule change according request", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 346,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, true);
          assert.equal(body.message, "Request approved");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Cancel Approve request must be have valid employee_trip", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 345,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Invalid Request");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Cancel Approve request must be have valid employee_trip and not have trip assigned", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 345,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(
            body.message,
            "Cancel Request Approval Declined because this schedule has used for further proceeds"
          );
          done();
        }
      );
    }).timeout(timeout);
  
    it("If Employee trip found and and trip not assigned then it should get cancel", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 345,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, true);
          assert.equal(body.message, "Request approved");
          done();
        }
      );
    }).timeout(timeout);
  
    it("New Trip Approve request under that login/logout should not already defined", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 349,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Schedule already defined");
          done();
        }
      );
    }).timeout(timeout);
  
    it("New Trip Approve request must be login time after last trip logout time", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 349,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(
            body.message,
            "Shift Schedule Not Possible because previous trip logout not done of date 18-06-2020"
          );
          done();
        }
      );
    }).timeout(timeout);
  
    it("If new request is valid then it should get set new schedule", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 349,
            requestState: "approved",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, true);
          assert.equal(body.message, "Request approved");
          done();
        }
      );
    }).timeout(timeout);
  
    it("Change | Cancel | New Request Decline request should get declined", (done) => {
      request.post(
        {
          headers: headers,
          url: "http://localhost:8008/api/v1/request-approve-decline",
          json: true,
          body: {
            tcrId: 1234,
            requestState: "declined",
          },
        },
        (err, res, body) => {
          if (err) {
            return err;
          }
          // console.log(body)
          assert.equal(200, res.statusCode);
          assert.equal(body.success, false);
          assert.equal(body.message, "Request declined");
          done();
        }
      );
    }).timeout(timeout);
  });