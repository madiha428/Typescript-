// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list


// Name Array
let guestArray : string[ ] = ["Saira", "Rabia", "Tooba"] ;

// can not make dinner
let canNotAttend:string = "Saira";

// invite new guest
let newGuest: string = "Abeeha";
guestArray[guestArray.indexOf(canNotAttend)]= newGuest;


console.log("Welcome all we found a bigger dinner table!")

guestArray.unshift("Nimra");

let middleGuest : string = "Aqsa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("Suman");

guestArray.map((items)=> console.log (`\nDear,${items} you are invited to dinner`));
