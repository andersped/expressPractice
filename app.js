//bring in the express module
var express = require("express");

//call the express function, return an object
var app = express();

app.set("view engine", "ejs");  //ejs is the middleman that makes the template for html


//localhost:3000 

app.get("/", function(request, response){
	var name = "Anders"
	response.render("index", {personName:name});
})
	
app.get("/person/:name", function(request, response){
	var person = request.params.name;
	response.render("person", {specificPerson:person});
})

app.get("/add/:num1/:num2", function(request, response){
	var sum = Number(request.params.num1) + Number(request.params.num2);
	response.render("math", {number:sum});
})

app.get("/subtract/:num1/:num2", function(request, response){
	var subtract = Number(request.params.num1) - Number(request.params.num2);
	response.render("math", {number:subtract});
})

app.get("/multiply/:num1/:num2", function(request, response){
	var multiply = Number(request.params.num1) * Number(request.params.num2);
	response.render("math", {number:multiply});
})

app.get("/divide/:num1/:num2", function(request, response){
	var divide = Number(request.params.num1) / Number(request.params.num2);
	response.render("math", {number:multiply});
})

app.listen(3000, function(){
	console.log("Server starting on port 3000");
});


