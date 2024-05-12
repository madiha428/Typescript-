// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Name Array
let guestArray : string[ ] = ["Saira", "Rabia", "Tooba"] ;

// can not make dinner
let canNotAttend:string = "Saira";

// invite new guest
let newGuest: string = "Abeeha";
guestArray[guestArray.indexOf(canNotAttend)]= newGuest;


guestArray.unshift("Nimra");

let middleGuest : string = "Aqsa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("Suman");
console.log(guestArray)

console.log("WE are invite only two people for dinner!");

while (guestArray.length>2){
let removeguest = guestArray.pop();
console.log(`\nsorry ${removeguest} we can't invite to dinner!`);
}

guestArray.map((item)=>console.log(`\n${item} you are still invited to dinner`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);