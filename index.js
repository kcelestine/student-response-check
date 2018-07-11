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

function studentResponseCheck(inputTemp, inputUnits, targetUnits, studentResponse){
    let correctResponse = convert(inputTemp, inputUnits, targetUnits);
    return correctResponse === studentResponse;
}

function convert(inputTemp, inputUnits, targetUnits) {
  if (inputUnits === "F" && targetUnits === "R")
    return KelvinToRankine(CelciusToKelvin(FarenheitToCelcius(temp)));
  if (inputUnits === "C" && targetUnits === "K")
    return CelciusToKelvin(temp);
  if (inputUnits === "K" && targetUnits === "F")
    return RankineToFarenheit(KelvinToRankine(temp));
  if (inputUnits === "R" && targetUnits === "C")
     return FarenheitToCelcius(RankineToFarenheit(temp));
  return false;
}

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
