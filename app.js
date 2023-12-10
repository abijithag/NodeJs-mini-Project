const { log } = require("console")
const readLine = require("readline")
const fs = require("fs")
const http = require("http")
const { parse } = require("path")
const url = require("url")
const replaceHtml = require('./Modules/replaceHtml')




let html = fs.readFileSync("./Template/index.html", "utf-8")
let product = JSON.parse(fs.readFileSync('./Template/hello.json', 'utf-8'))
let productHtml = fs.readFileSync('./Template/products.html', 'utf-8')
let productDetails = fs.readFileSync('./Template/product-details.html', 'utf-8')








const server = http.createServer((req, res) => {
    let { query , pathname: path } = url.parse(req.url,true)





    if (path == "/" || path == "/Home") {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "My-header": "hello world"
        })
        res.end(html.replace('{{%Contant%}}', "you are in home page"))
    } else if (path == "/Contact") {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "My-header": "hello world"
        })
        res.end(html.replace('{{%Contant%}}', "you are in home contact page"))
    } else if (path == "/About") {
        res.writeHead(200, {
            "Content-Type": "text/html",
            "My-header": "hello world"
        })
        res.end(html.replace('{{%Contant%}}', "you are in about page"))
    } else if (path == "/Products") {
        
        if (!query.id) {
            res.writeHead(200, {
                "Content-Type": "text/html",
                "My-header": "hello world"
            })
            let productHtmlArray = product.map((prop) => {
                return replaceHtml(productHtml, prop)
            })

            let joProduct = productHtmlArray.join(',')
            res.end(html.replace('{{%Contant%}}', joProduct))

        } else {
            let prop = product[query.id]
           let js = replaceHtml(productDetails,prop)

           res.end(html.replace('{{%Contant%}}', js))
        }

    } else {
        res.writeHead(404, {
            "Content-Type": "text/html",
            "My-header": "hello world"
        })
        res.end(html.replace('{{%Contant%}}', 'page not found'))

    }

})

server.listen(7000, "localhost", () => {
    console.log("server started");
})

