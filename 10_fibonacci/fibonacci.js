const fibonacci = function(input) {
    
    if(input<0) return "OOPS";
    if(input === 0) return 0; 
    
    let firstN = 0;
    let lastN = 1;

    for(let fn = 2; fn<=input; fn++){
        let current = firstN + lastN;
        firstN = lastN;
        lastN = current;
    }

    return lastN;
};

// Do not edit below this line
module.exports = fibonacci;
