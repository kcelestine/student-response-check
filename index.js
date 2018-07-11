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
console.log(studentResponseCheck(84.2, "F", "R", 543.5));
console.log(studentResponseCheck(-45.14, "C", "K", 227.51));
console.log(studentResponseCheck(317.33, "K", "F", 110.5));
console.log(studentResponseCheck(444.5, "R", "C", -30.9));
console.log(studentResponseCheck(6.5, "F", "R", "dog"));
console.log(studentResponseCheck("dog", "", "C", 45.32));

console.log(convert(84.2, "F", "R"));
console.log(convert(-45.14, "C", "K"));
console.log(convert(317.33, "K", "F"));
console.log(convert(444.5, "R", "C"));
console.log(convert(6.5, "F", "R"));
console.log(convert("dog", "", "C"));

