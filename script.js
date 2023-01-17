console.log('HELLO AMETHYST 🌟');

//RAM = random access memory 
// variable = value 
let myAnniversary = 'May 18, 2013';     
//                                                   👇 reading a value from a variable  
console.log('🥰 What\'s my anniversary date again?', myAnniversary); 

//to reassign variable you would do:
myAnniversary = '5/18/13';
console.log('udpated myAnniversary:', myAnniversary);



//__________DRIVING TO THE MOON____________//
//expression 

let distanceToTheMoon = 280940;
let toTheMoonAndBack = distanceToTheMoon * 2; 
let mph = 60; 
let hoursToDriveToTheMoon = toTheMoonAndBack / mph; 
let maxNumberOfHoursICanDriveBeforeIGoALittleCrazy = 3; 

let isItTooFar = hoursToDriveToTheMoon > 3;

if (hoursToDriveToTheMoon > 3) {
    console.log('that\'s too long!');
    console.log('i am not going to do that');
}

//  abstraction === more generalized
// code reuse
// code organization 
function isItTooFarForMe(distance, maxBeforeCrazy, mph) {
    let hours = distance / mph;

    // if (hours > maxBeforeCrazy) {
    //     return true;
    // } else {
    //     return false; 
    // }

    // REFACTOR ABOVE CODE:
    return hours > maxBeforeCrazy; 
    
}
let isTheMoonTooFar = isItTooFarForMe(280940, 3, 60); //


