//?1 FAST
//?2 FrontEND && Backend
//?3 Popular
//?4 a lot Of Support


// Bring Express
const express = require("express"); //ES5

// invoke express
const app = express();
// console.log(app)
const PORT = 5000;

//-- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ---- Routing ----
// req is shorthand for request
// res is shorthand for response
app.get("/api", (requestObj, responseObj) => {
    // console.log("hello from /api")
    // console.log(requestObj)
    responseObj.send("Hello from the server")
})

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// Getting 
app.get("/api/users", (req, res) => {
    res.json(users)
})


app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id)
    res.json(users[req.params.id])

})

// Creating
app.post("/api/users", (req, res) => {
    // console.log('====================================');
    // console.log(req.body);
    // console.log('===================================='); req.body
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
})




































































// this needs to be below the other code blocks
app.listen(PORT, () => {
    console.log(`>>>>> the server  is working smoothly in Port ${PORT}`)
});
















