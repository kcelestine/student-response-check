exports.handler = (event, context, callback) => {
    let inputTemp = event.inputTemp;
    let inputUnits = event.inputUnits;
    let targetUnits = event.targetUnits;
    let studentResponse = event.studentResponse;
    //let str =  "Temp: " + inputTemp + " Units: " + inputUnits + " Units: " + targetUnits + " Response: " + studentResponse;
    let celcius = FarenheitToCelcius (100);
    let kelvin = CelciusToKelvin (100);
    let rankine = KelvinToRankine (100);
    let farenheit = RankineToFarenheit (100);
    let str =  "celcius: " + celcius + " kelvin: " + kelvin + " rankine: " + rankine + " farenheit: " + farenheit;
    callback(null, str);
};


function FarenheitToCelcius (temp) {
	// MyLambdaFunction logic here
   return (temp - 32) / (9/5);
}

function CelciusToKelvin (temp) {
	// MyLambdaFunction logic here
   return temp + 273.15;
}

function KelvinToRankine (temp) {
	// MyLambdaFunction logic here
   return temp * (9/5) ;
}

function RankineToFarenheit (temp) {
	// MyLambdaFunction logic here
   return temp - 459.67 ;
}

function studentResponseCheck(inputTemp, inputUnits, targetUnits, studentResponse){
    let correctResponse = convert(inputTemp, inputUnits, targetUnits);
    return correctResponse === studentResponse;
}

function FR(temp){
  return KelvinToRankine(CelciusToKelvin(FarenheitToCelcius(temp)));    
}

function CK(temp){
  return CelciusToKelvin(temp);
}

function KF(temp){
    return RankineToFarenheit(KelvinToRankine(temp));
}

function RC(temp){
    return FarenheitToCelcius(RankineToFarenheit(temp));
}

function convert(inputTemp, inputUnits, targetUnits){
    let conversionFunctions = {
        "F": FarenheitToCelcius, 
        "C": CelciusToKelvin, 
        "K": KelvinToRankine, 
        "R": RankineToFarenheit};
        
    let indices = ["F", "C", "K", "R"];
    let first = indices.indexOf(inputUnits);
    let last = indices.indexOf(targetUnits);
    
    let conversionFunctionsToRun = [];
    for (let i=first; i <last; i++){
        let index = indices[i];
        let func = conversionFunctions[index];
        conversionFunctionsToRun.push(func);
    }
    
    conversionFunctionsToRun.forEach(function(item){
        console.log(item);
    })
    
    return 0;
}
