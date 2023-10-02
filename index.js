const userInfo = require("./information");

console.log(`userInfo ${userInfo.object.userName}`);
console.log(`userInfo ${userInfo.object.campus}`);

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello je suis ${userInfo.object.userName} je viens du campus de ${userInfo.object.campus}` ,
    e: "oO",
    T: "U ",
  })
);
