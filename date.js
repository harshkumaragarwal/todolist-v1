module.exports=getdate;
function getdate()
{
  var today=new Date();
 
 var options={
  weekday:"long",
  day:"numeric",
  month:"long",
  hour:"numeric"
 };
 var day=today.toLocaleDateString("en-us",options);
 return day;
}