let myAge = 25; //my age variable
let earlyYears = 2; //variable that changes

earlyYears *= 10.5;
let laterYears = myAge -= 2; //subtracts 2 from my age

laterYears *= 4; //multiples laterYears by 4

console.log(earlyYears, laterYears)

let myAgeInDogYears = earlyYears + laterYears; //adds earlyyear and lateryears together to equal myageindogyears

let name = 'Frances';
let myName = name.toLowerCase(name); //changes myname string to all lowercase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);