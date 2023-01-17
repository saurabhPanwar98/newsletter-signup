const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { options } = require("request");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(rek,ress){
    ress.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const { fName , lName , email } = req.body;

    const data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:fName,
                    LNAME:lName
                }
            }
        ]
    };
    const postData = JSON.stringify(data);
    
    const url = "https://us21.api.mailchimp.com/3.0/lists/269560bab8";

    const options = {
        method:'POST',
        auth:'arav1:cd11997a072765c044a62d151dcfb58a-us21',
        // headers:{
        //     'Content-Type':'application/json'
        // }
    }

    const request = https.request(url,options,function(response){
        console.log("Status: ",response.statusCode);
        if(response.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
        } else {
            res.sendFile(__dirname+"/failure.html");
        }
        console.log(`Headers: ${JSON.stringify(response.headers)}`);
        // console.log("HEADERS:",JSON.stringify(response.headers));
        response.setEncoding('utf-8');
        response.on('data',(chunk)=>{
            console.log(`BODY:${(chunk)}`);
            // res.send(JSON.parse(chunk));
        });
        response.on('end',()=>{
            console.log('No more data in response. ');
        });
    })
    
    request.on('error',(e)=>{
        console.error(`problem with request: ${e.message}`);
    })
    // Write data to request body
    request.write(postData);
    request.end();
})

app.post("/failure",function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Server at port 3000");
})




// Api key
// cd11997a072765c044a62d151dcfb58a-us21

// list id
// 269560bab8
