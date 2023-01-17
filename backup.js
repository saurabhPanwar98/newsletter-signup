// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");
// const path = require("path")

// const mailchimp = require("@mailchimp/mailchimp_marketing");
// mailchimp.setConfig({
//     apiKey: "cd11997a072765c044a62d151dcfb58a-us21",
//     server: "us21",
// });


// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// })
// app.post("/", function (req, res) {
//     const firstName = req.body.fName;
//     const secondName = req.body.lName;
//     const email = req.body.email;

//     const listId = "269560bab8"

//     const subUser = {
//         firstName:firstName,
//         lastName:secondName,
//         email:email
//     };

//     async function run(){
//         const response = await mailchimp.lists.addListMember(listId,{
//             email_address:subUser.email,
//             status:"subscribed",
//             merge_fields:{
//                 FNAME:subUser.firstName,
//                 LNAME:subUser.lastName
//             }
//         });

//         res.sendFile(__dirname+"/success.html")
//         console.log("successfully added contact");
//     }

//    run().catch(e => res.sendFile(__dirname+"/failure.html"));

   
// })

// app.listen(3000, function () {
//     console.log("Server running on port 3000");
// });


// const postData = JSON.stringify({
//         members:[{
//             email_address:email,
//             status:"subscribed",
//             merge_fields:{
//                 FNAME:fName,
//                 LNAME:lName
//             }

//         }]
//     })


// Api key
// cd11997a072765c044a62d151dcfb58a-us21

// list id
// 269560bab8

// const data = {
//     memebers: [{
//         email_address:email,
//         status:"subscribed",
//         merge_fields: {
//             FNAME: firstName,
//             LNAME: lastName
//         }
//     }]
// };

//    const jsonData = JSON.stringify(data);

//     const url = "https://us21.api.mailchimp.com/3.0/lists/269560bab8"

//     const options = {
//         method: "POST",
//         auth: "arav1:cd11997a072765c044a62d151dcfb58a-us21"
//     }

//     const request = https.request(url, options, function (response) {
//         response.on("data", function (data) {
//             console.log(JSON.parse(data));
//         })
//     })
//     console.log(firstName, lastName, email);
    
//     request.write(jsonData);
//     request.end();