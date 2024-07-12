// REmember, Age 90 is taken as common reference of life expectancy.
function lifeInWeeks(yourAge){
var monthLeft = ((90-yourAge)*12);
var weeksLeft = ((90-yourAge)*52);
var daysLeft = ((90-yourAge)*365);
console.log("Your have "+daysLeft+" days, "+weeksLeft+" weeks and "+monthLeft+" months left");
}
// enter your age in curly braces below.
lifeInWeeks(20);
