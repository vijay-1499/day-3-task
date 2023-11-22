//2.question
//step1
var allNations = new XMLHttpRequest();
//step2
allNations.open("GET","https://restcountries.com/v3.1/all" );
//step3
allNations.send(); 
//step4
allNations.onload = function(){
    var result = JSON.parse(allNations.response)
console.log(result)
//step5
 for (var i = 0; i < result.length; i++) {
 //its proper to understanding for viewer so i added country name and flags 
    var countryName = result[i].name.common;
    var flags = result[i].flags.png
    console.log("CountryName:"+countryName)
    console.log(countryName+" "+"Flag:"+flags)
 }
}