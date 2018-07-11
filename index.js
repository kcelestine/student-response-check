exports.handler = (event, context, callback) => {
    let inputTemp = event.inputTemp;
    let inputUnits = event.inputUnits;
    let targetUnits = event.targetUnits;
    let studentResponse = event.studentResponse;
    
    callback(null, str);
};

function studentResponseCheck(inputTemp, inputUnits, targetUnits, studentResponse){
    let correctResponse = convert(inputTemp, inputUnits, targetUnits);
    if (correctResponse == false)
	return "invalid"
    if (Math.round(correctResponse) == Math.round(studentResponse))
        return "correct"
    else
	return "incorrect"
}

function convert(inputTemp, inputUnits, targetUnits) {
  if (inputUnits === "F" && targetUnits === "R")
    return KelvinToRankine(CelciusToKelvin(FarenheitToCelcius(inputTemp)));
  if (inputUnits === "C" && targetUnits === "K")
    return CelciusToKelvin(inputTemp);
  if (inputUnits === "K" && targetUnits === "F")
    return RankineToFarenheit(KelvinToRankine(inputTemp));
  if (inputUnits === "R" && targetUnits === "C")
     return FarenheitToCelcius(RankineToFarenheit(inputTemp));
  return false;
}

function FarenheitToCelcius (temp) {
	// MyLambdaFunction logic here
   return (temp - 32) / 1.8;
}

function CelciusToKelvin (temp) {
	// MyLambdaFunction logic here
   return temp + 273.15;
}

function KelvinToRankine (temp) {
	// MyLambdaFunction logic here
   return temp * 1.8;
}

function RankineToFarenheit (temp) {
	// MyLambdaFunction logic here
   return temp - 459.67;
}
