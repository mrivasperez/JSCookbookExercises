// 1.2 Extracting a List from a String
// In this script, we will use create an array from a string that contains a list of items.

let sentence = 'Here are the items we need for the BBQ: meat, corn, buns, onion, spices, lime, tortillas. Let me know if you need anything else!';

let start = sentence.indexOf(':');

let end = sentence.indexOf('.', start+1);

let listStr = sentence.substring(start+1, end);

var bbqList = listStr.split(',');

console.log(bbqList)