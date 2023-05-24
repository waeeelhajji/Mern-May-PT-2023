//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?




//?--------Object-Oriented Programming Paradigm

//* This is an approach where the solution is designed around communication between
//* the Objects or Classes,which hold the data and the methods to act upon that data.
//*A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript,



//?--------Functional Programming Paradigm

//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* functional Programming



















//!-------------------------------Map and Filter



const sal = [20, 30, 40, 50, 60]


const evens = sal.map(val => val * 2);

// console.log(evens)

const filtered = sal.filter(val => val > 40)
console.log(filtered)
