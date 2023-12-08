const { log } = require("console")
const readLine = require("readline")
const fs=require("fs")
const http = require("http")




// PART 4

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("please enter your name", (name) => {
//     console.log("this is the name" + name);
//     rl.close();
// })


// PART 6
// const data = fs.readFileSync("./file/text.tst","utf-8")

// console.log(data);
// const condant ="hnuhwcwcc"

// fs.writeFileSync("./file/text.tst",condant)
   


//PART 7

const server = http.createServer((req, res) => {
    let path = req.url
    if (path == "/" || path == "/home") {
        res.end("You Are In Home Page ")
    } else if (path == "/contact") {
        res.end("You Are In Contact Page")
    } else if (path == "/about") {
        res.end("You Are In About Page")
    } else {
        res.end("Page Not Found")

    }

})

server.listen(3000, "localhost", () => {
    console.log("server started");
})

