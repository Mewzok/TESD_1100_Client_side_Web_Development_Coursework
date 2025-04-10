"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Jonathan Kinney
   Date:   08/10/2025
   
   Filename: tc_cart.js
	
*/

// declare variables
var orderTotal = 0;

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>"

for(var i = 0; i < item.length; i++) {
   // add item and item image
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item' /></td>"

   // add description, price and quantity of item
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

   // determine cost of items based on quantity
   var itemCost = itemPrice[i] * itemQty[i];

   // display total item(s) cost
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   // add item(s) cost to running order total
   orderTotal += itemCost;
}

// display order total
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// insert into HTML
document.getElementById("cart").innerHTML = cartHTML;