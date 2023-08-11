const findTheOldest = function(input) {

    let oldest = input[0];

    for(let i =0; i<input.length; i++){
        if(getAge(input[i].yearOfBirth,input[i].yearOfDeath)>getAge(oldest.yearOfBirth,oldest.yearOfDeath)){
            oldest = input[i];
        }
    }
    return oldest;
};

function getAge(birth, death){
    
    if(!death){
        death = new Date().getFullYear();
    } 
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
