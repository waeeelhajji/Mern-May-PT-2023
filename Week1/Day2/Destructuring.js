//!-------------------------------What is Destructuring ?


//* Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
//* or properties from objects, into distinct variables. That is, we can extract data from arrays and
//* objects and assign them to variables


// let a, b, rest

// [a, b] = [10, 20]



// console.log('====================================');
// console.log(b);
// console.log('====================================');


[a, b, ...rest] = [10, 20, 30, 40, 50, 60]

// console.log('====================================');
// console.log(rest);
// console.log('====================================');

const x = [1, 2, 3, 4, 5]
const [y, z] = x

// console.log(y)
// console.log(z)


const obj = {
    a: 1,
    b: 2
}

const { aaa, bbb } = obj

const q = obj.b

// console.log(aaa)


var objects = { x: 21, f: 47, u: 63 }

// const { w, aa, bb } = objects
const { x: w, f: aa, u: bb } = objects

// console.log(w)





//!-------------------------------------------------------- REST / SPREAD

const ninja = {
    firstName: "",
    lastName: "",
    email: ""
}

const obj_copy = { ...ninja }

console.log(obj_copy)


const CLubs = ["CSS", "Real", "Dortmund", "City"]

const array_copy = [...CLubs]
console.log(array_copy)