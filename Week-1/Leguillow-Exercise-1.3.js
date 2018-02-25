/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 24 February 2018
; Modified By: Hector Leguillow
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================

*/
function CellPhone(manufacturer, model, color, price)

{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    // get price
    this.getPrice = function()
    {
        return this.price;
    }
        this.getModel = function()
        { 
        return this.model;
        }
        this.getDetails = function ()
        {
        return "Manufacturer: " + this.manufacturer + "\nModel:" +  this.getModel() +
        "\nColor: " + this.color + "n\Price: " + this.getPrice();
        }
    
var CellPhone = new CellPhone ("Apple", "iPHone X", "White", "399.99");
console.log(cellPhone.getDetails());
}