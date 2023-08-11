const reverseString = function(input) {

    if(input==="") return input;

    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
