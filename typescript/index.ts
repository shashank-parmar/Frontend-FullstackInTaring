let num: number   = 5;
console.log(num)


function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(10,5))

let ok = sum.toString()
console.log(ok)

const names:string = "shashank";
const names2:string = "harsh";

const up = names.toLocaleUpperCase()
const lp = names.toLocaleLowerCase()

console.log(up,lp)

const com = names === names2;
console.log(com)

let names3:any = 7;
names3 = "shashank"


let array:number[] =[1,2,3,4,5,6,7]

let array2:number[]=new Array(1,2,3,4,5)

const obj :{
    name:string,
    age:number,
} = {
    name:"shashank",
    age:20
}

console.log(obj)

//alias in obj 

type Obj2 = {
    name:string,
    age?:number,
}

const obj2:Obj2 ={
    name:"shashank",
    age:20
}

const obj3:Obj2 ={
    name:"harsh",
    age:24
}

const obj4:Obj2 ={
    name:"harsh",
    
}
console.log(obj2,obj3,obj4)

type Product ={
    price:number,
    qty:number,
}

const product: Product = {
    price: 10,
    qty: 5,
};

const calculator = (product:Product)=>{
    return product.price * product.qty;
}

console.log(calculator(product))

//enum

enum Rolse {
    user = "user",
    admin = "admin"
}

type Enumobj = {
    name:string,
    age:number,
    role:Rolse,
}

const user1:Enumobj = {
    name:"shashank",
    age:20,
    role:Rolse.user,
}  

const user2:Enumobj = {
    name:"shashank",
    age:20,
    role:Rolse.admin,
} 

//tuples

type arraytupes = [string,number,boolean]

const person1:arraytupes = ['shashank',20,true]

console.log(person1)

//union

const union = (product:string | number | boolean)=>{
    // return product.price * product.qty;
}

//intersection

type  person01 = {
    name:string,
    age:number
}
type  person02 = {
    empid:string,
    dept:string
}

type persondetail = person01 | person02
// type persondetail = person01 & person02


//interface
//type ni jgyaye interface

interface person001 {
    name:string,
    age:20
}

    