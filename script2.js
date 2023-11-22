//3.question
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
    var countryName = result[i].name.common;
    var population = result[i].population;
    var region = result[i].region;
    var subregion = result[i].subregion;
    console.log("CountryName:"+countryName);
    console.log("region:"+region);
    console.log("subregion:"+subregion);
    console.log("population:"+population);
    
}

}