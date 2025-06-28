let num:number=10;

let x=10;
x=20;

let val="rohit";
// val=20; //error dega

let money:any; //mene esko initialize nahi kiya(money ka tyoe:any hai means ki koi bhi data type de do) 
money=20 
money="Rohit" // initialize nahi kiya to koi bhi value assign krr sakte hai
console.log(money.toUpperCase());

let val2:unknown;
val2="Rohit";
val2=10;
if(typeof val2==='string') //unknown mei pehle value ko consume kerna hoga ki kya ye ('string') hai ya nahi hai
console.log(val2.toUpperCase());