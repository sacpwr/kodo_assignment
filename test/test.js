const chai = require('chai');
const request = require('request');
const moment = require('moment');
const assert = chai.assert;
var fs = require('fs');
const expect = require('chai').expect;
let timeout = 15000;

/* 
pageNumber should be number
pageSize should be number
pagination with "pageNumber":1, "pageSize":10, should give 10 below 10 records
search response should be with pagination count
searchText with ""
searchText with quote "\"Quaerat\""
searchText with quoted sentence "\"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim.\""
searchText without quote sentence "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim." 
search result should have fields like id, name, image, description, dateLastEdited
*/
describe('/api/v1/search-kodo-data Testing', () => {
    it('pageNumber should be number', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":"AA", 
                "pageSize":10, 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid pageNumber")
            done()
        })
    }).timeout(15000)

    it('pageSize should be number', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":"NA", 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, false)
            assert.equal(body.message,"Invalid pageSize")
            done()
        })
    }).timeout(15000)

    it('pagination with "pageNumber":1, "pageSize":10, should give 10 below 10 records', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)
            done()
        })
    }).timeout(15000)

    it('search response should be with pagination count', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"paginationCount")
            done()
        })
    }).timeout(15000)

    it('searchText with ""', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)
            done()
        })
    }).timeout(15000)

    it('searchText with quote "\"Quaerat\""', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":"\"Quaerat\""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)
            done()
        })
    }).timeout(15000)

    it('searchText with quoted sentence "\"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim.\""', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":"\"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim.\""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)

            //find search response is match by request or not
            let texts = ["Quaerat", "in", "rerum", "Possimus", "reprehenderit", "provident", "ea", "voluptatem", "qui", "et","enim"]
            for(let i=0; body.data.data.length > i; i++){
                let name = body.data.data[i].name;
                let description = body.data.data[i].description;
                let isFound = texts.some(r=> name.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false && 
                              texts.some(r=> description.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false
                assert.equal(isFound,false,"name or description not contains searchText "+JSON.stringify(body.data.data[i]));
            }
            done()
        })
    }).timeout(15000)

    it('searchText without quote sentence "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim." ', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim."
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)

            //find search response is match by request or not
            let texts = ["Quaerat", "in", "rerum", "Possimus", "reprehenderit", "provident", "ea", "voluptatem", "qui", "et","enim"]
            for(let i=0; body.data.data.length > i; i++){
                let name = body.data.data[i].name;
                let description = body.data.data[i].description;
                let isFound = texts.some(r=> name.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false && 
                              texts.some(r=> description.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false
                assert.equal(isFound,false,"name or description not contains searchText "+JSON.stringify(body.data.data[i]));
            }
            done()
        })
    }).timeout(15000)

    it('search result should have fields like id, name, image, description, dateLastEdited', (done) => {
        request.post({
            headers: {},
            url: "http://localhost:3000/api/v1/search-kodo-data",
            json: true,
            body: {
                "pageNumber":1, 
                "pageSize":10, 
                "searchText":""
            }
        }, (err, res, body) => {
            if (err) {
                return err;
            }
            // console.log(body)
            assert.equal(200, res.statusCode);
            assert.equal(body.success, true)
            assert.property(body.data,"data")
            assert.isArray(body.data.data)
            assert.isBelow(body.data.data.length, 11)

            let texts = ["Quaerat", "in", "rerum", "Possimus", "reprehenderit", "provident", "ea", "voluptatem", "qui", "et","enim"]
            for(let i=0; i<body.data.data.length; i++){
                assert.property(body.data.data[i], "id")
                assert.typeOf(body.data.data[i].id, "number")
                assert.property(body.data.data[i], "name")
                assert.typeOf(body.data.data[i].name, "string")
                assert.property(body.data.data[i], "image")
                assert.typeOf(body.data.data[i].image, "string")
                assert.property(body.data.data[i], "description")
                assert.typeOf(body.data.data[i].description, "string")
                assert.property(body.data.data[i], "dateLastEdited")
                assert.typeOf(body.data.data[i].dateLastEdited, "string")
                let isvalid = moment(body.data.data[i].dateLastEdited).isValid();
                assert.equal(isvalid, true)

                //find search response is match by request or not
                let name = body.data.data[i].name;
                let description = body.data.data[i].description;
                let isFound = texts.some(r=> name.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false && 
                              texts.some(r=> description.replace(/[^a-zA-Z ]/g, "").split(" ").includes(r) >= 0) == false
                assert.equal(isFound,false,"name or description not contains searchText "+JSON.stringify(body.data.data[i]));
            }

            done()
        })
    }).timeout(15000)

})