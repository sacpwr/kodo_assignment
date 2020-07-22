# kodo_assignment
kodo interview assignment

A. For run a project 
   1. node version should be above v10
   2. create database "kodo_assignment"
   3. npm i --s
   4. npm run start:dev --for run project

B. Insert data 
        e.g;
        API(POST) : localhost:3000/api/v1/upload-kodo-data
        body : {
                "data": [
                    {
                        "name": "Customer Assurance Liaison",
                        "image": "http://lorempixel.com/640/480",
                        "description": "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
                        "dateLastEdited": "2018-05-19T12:33:25.545Z"
                    },
                    {
                        "name": "Dynamic Infrastructure Designer",
                        "image": "http://lorempixel.com/640/480",
                        "description": "Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia.",
                        "dateLastEdited": "2017-11-28T04:59:13.759Z"
                    }
                ]
        }

C. Check search API
      e.g. 
      API(POST) : localhost:3000/api/v1/search-kodo-data
      body : {
            "pageNumber":1, 
            "pageSize":10, 
            "searchText":"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim."
      }
    
D. For run unit test cases
     command : npm test test/test.js
