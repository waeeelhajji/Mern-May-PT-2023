
//!-------------------------------What is ECMAScript ?

//* ECMAScript, also known as JavaScript, is a programming language adopted by the European Computer Manufacturer's Association
//* as a standard for performing computations in Web applications. ECMAScript is the official client-side scripting language of VoiceXML.
//* ECMAScript is a limited program//ming model for simple data manipulation.


//!-------------------------------what is es6 ?

//* What is ES6? ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript,
//* it was published in 2015, and is also known as ECMAScript 2015.

//!-------------------------------What is the difference between JavaScript and ES6 ?

//* ES6 and JavaScript belong to "Languages" category of the tech stack. "ES6 code is shorter than traditional JS"
//*  is the top reason why over 98 developers like ES6, while over 1556 developers mention "Can be used on frontend/backend"


//!-------------------------------Comparison between ES5 and ES6 ?


//?---Examples ES5


var name = "Wael"

var age = 56


var loveCoding = true

var hobbies = ["Coding", "Music", "Movies and series"]


var Info = {
    fullName: "Wael Hajji",
    Age: 56
}
//?---Examples ES6

let name = "Wael"

let age = 56






const Info = {
    fullName: "Wael Hajji",
    Age: 56
}
//* Variables defined with const cannot be Redeclare.
//* Variables defined with const cannot be Reassigned.



//?---Cannot be Reassigned


Info = {
    NoData: "404"
}

Info.fullName = " New Name"


var x
x = 5

// const NoNo

NoNo = "NE we Can't do this "

//!--When to use JavaScript const?

//* Always declare a variable with const when you know that the value should not be changed.

//? Use const when you declare:

//* A new Array
//* A new Object
//* A new Function




//!--Functions

function ES5() {
    console.log("hey JS we miss you")
}

const ES6 = (para) => {
    console.log("where have you bean all my life ES6")

}

//!---------------------------------------What is scope ?

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("this outside the for loop scope", i)


//? JavaScript has the following kinds of scopes:

//* Global scope: The default scope for all code running in script mode.
//* Module scope: The scope for code running in module mode.
//* Function scope: The scope created with a function.


var x = 6



x = 9



function er() {
    var x = 0
}

console.log(x)