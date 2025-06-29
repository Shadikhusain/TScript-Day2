"use strict";
let num = 10;
let x = 10;
x = 20;
let val = "rohit";
// val=20; //error dega
let money; //mene esko initialize nahi kiya(money ka tyoe:any hai means ki koi bhi data type de do) 
money = 20;
money = "Rohit"; // initialize nahi kiya to koi bhi value assign krr sakte hai
console.log(money.toUpperCase());
let val2;
val2 = "Rohit";
val2 = 10;
if (typeof val2 === 'string') //unknown mei pehle value ko consume kerna hoga ki kya ye ('string') hai ya nahi hai
    console.log(val2.toUpperCase());
if (typeof val2 === 'number')
    console.log(val2.toFixed(2));
// Array define in typescript 
// Non primitive data type
let arr = [2, 4, 5, 7, 11];
let arr2 = [2, 1, 9, 10];
let arr3 = ["Shadik", 20, 11, "Sohan"];
// arr3.push(true); // error dega
arr3.push(10);
console.log(arr3);
// tuples:-
let tuple = ["rohit", 20, 30];
console.log(tuple);
// object define in typescript
let obj1 = {
    name: "rohit",
    age: 20,
    gender: "male",
};
