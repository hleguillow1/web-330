/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 25 February 2018
; Modified By: Hector Leguillow
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================

*/


function Car(model);
{
    this.model = model;
}
Car.prototype.start = function ()
{
    console.log ("Car added to the racetrack!");
}
function Truck(model, year)
{
    this.model = model;
    this.year = year;

}
Truck.prototype.start = function()
{
console.log("truck added to the racetrack!");
}
    function Jeep (model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function ()
{
    console.log("Jeep added to the racetrack!");
}
var racetrack = [];

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}
var celica = new car("Celica");
var fordF150 = new Truck("Ford", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

console.log('\n--The following vehicles have been added to the racetrack--');
for(var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ":" + racetrack[x].model);
}

// end program