const sumAll = function(first, last) {

    if(first<0 || last <0) return "ERROR";
    if(typeof first !="number" || typeof last !="number") return "ERROR";

    var arrayLength = first - last;
    var sum =0;

    if(arrayLength <0) {
        arrayLength = arrayLength * -1;
    }

    for(let i =0; i< arrayLength+1; i++){
        sum += i+1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
