//The replace() method replaces a specified value with another value in a string:

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

//---------------

//By default, the replace() method replaces only the first match:

let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace("Microsoft", "W3Schools");
console.log(newText2);

//---------------

//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let text3 = "Please visit Microsoft!";
let newText3 = text3.replace("MICROSOFT", "W3Schools");
console.log(newText3);

//------------

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

let text4 = "Please visit Microsoft!";
let newText4 = text4.replace(/MICROSOFT/i, "W3Schools");
console.log(newText4);

//-------------

// To replace all matches, use a regular expression with a /g flag (global match):

let text5 = "Please visit Microsoft and Microsoft!";
let newText5 = text5.replace(/Microsoft/g, "W3Schools");
console.log(newText5);
