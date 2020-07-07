const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.yourMessage;
  console.log(name);
  console.log(email);
  console.log(message);
  res.send("Your email is reached. I will contact you soon. Thank you." );

});

app.listen(3030,function(){
  console.log("Server is starting at 3030");

});
