var fs = require('fs');
var textByLine = fs.readFileSync('input.txt').toString().split("\n");

function getfirstNumber(element){
    for(i=0 ; i < element.length  ; i++){
        if(!isNaN(element[i])){
            return firstNumber = element[i];      
        }
    }
}
function getLastNumber(element){
    var arr = [];
    for(i=0 ; i < element.length; i++){
        if(!isNaN(element[i])){
            arr.push(element[i])
        }
    }
    return lastNumber = arr[(arr.length - 1)]
}

function getCalibration(){
    var total = 0
    textByLine.forEach(element => {
        var firstNumber = getfirstNumber(element)
        var lastNumber = getLastNumber(element)
        var number = Number(firstNumber + lastNumber)
        total += number
    });
    console.log(total)
}
getCalibration()


