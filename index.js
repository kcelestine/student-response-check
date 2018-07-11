exports.handler = (event, context, callback) => {
    // TODO implement
    let inputTemp = event.inputTemp;
    let inputUnits = event.inputUnits;
    let targetUnits = event.targetUnits;
    let studentResponse = event.studentResponse;
    let str =  "Temp: " + inputTemp + " Units: " + inputUnits + " Units: " + targetUnits + " Response: " + studentResponse;
    callback(null, str);
};
