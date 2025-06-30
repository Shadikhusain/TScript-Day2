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

if(typeof val2==='number')
    console.log(val2.toFixed(2));

// Array define in typescript 
// Non primitive data type
let arr:number[]=[2,4,5,7,11];
let arr2=[2,1,9,10];

let arr3:(string | number)[]=["Shadik",20,11,"Sohan"];
// arr3.push(true); // error dega
arr3.push(10);
console.log(arr3);

// tuples:-

let tuple:[string,number,number]=["rohit",20,30];
console.log(tuple);

// object define in typescript

// esko inline object bolte hai
let obj1:{name:string,age:number,gender:string}={
    name:"rohit",
    age:20,
    gender:"male",
}

// (ii)
let person:{name:string,age:number,balance:number}
person={
    name:"shadik",
    age:20,
    balance:420,
}


// (iii) Aliases
type customer={
    name:string,
    age:number,
    id:string,
}
let c1:customer={
name:"shadik",
age:20,
id:"fshd",
};


// interface humesha multiple time likhne ke baad automatic (merge) ho jaata hai
interface admin{ //interface multiple times and then automatic merge
name:string,
age:number,
position:string,
};
interface admin{ //interface multiple times use and then (merge)
    id:number,
};
let obj3:admin={
    name:"shdik",
    age:20,
    position:"manager",
    id:2023,
}
