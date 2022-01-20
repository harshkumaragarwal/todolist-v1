
 
 
 
 const express= require('express');
 const bodyParser= require('body-parser');
 const date=require(__dirname+'/date.js');


 const app= express();
app.set('view engine','ejs');
var Listitems=["Buy Food",
 " Cook Food",
  "Eat Food"];
  let workItems=[""];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',function(req,res)
{

  let day=date();
 res.render("lists",{Listtitle:day ,Listitems:Listitems});
});
app.get('/work',function(req,res){
res.render("lists",{Listtitle:"Work List",Listitems:workItems});
});
app.get('/about',function(req,res){
  res.render("about");
});

app.post('/',function(req,res)
{
 var a=req.body.newtodo;
 console.log(a);
  if(req.body.listSubmit==="Work List"){
 workItems.push(a);
 console.log(workItems);
 res.redirect('/work');}
 else
{ Listitems.push(a);
 res.redirect('/');}
});
 app.listen(3000,function(){
  console.log("Server running on port  3000")
 });