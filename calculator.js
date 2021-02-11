const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var result = number1 + number2;
  res.send("Result of addition is : "+ result);
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var bmi = weight/(Math.pow(height,2));
  res.send("BMI is : "+bmi);
})

app.listen(port,function(){
  console.log(`Server started on ${port}`);
});
