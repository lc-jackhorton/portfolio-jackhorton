const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        filepath = path.join(__dirname, "public", "index.html");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } 
    else if (req.url === "/styles.css") {
        filepath = path.join(__dirname, "public", "styles.css");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "text/css"});
            res.write(data);
            res.end();
        })
    } 
    else if (req.url === "/IMG_Nature.jpeg") {
        filepath = path.join(__dirname, "public", "IMG_Nature.jpeg");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/jpeg"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/IMG_LC_Circuit.jpeg") {
        filepath = path.join(__dirname, "public", "IMG_LC_Circuit.jpeg");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/jpeg"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/IMG_Kempe.png") {
        filepath = path.join(__dirname, "public", "IMG_Kempe.png");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/IMG_Portrait.jpg") {
        filepath = path.join(__dirname, "public", "IMG_Portrait.jpg");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/jpg"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/IMG_Installer.png") {
        filepath = path.join(__dirname, "public", "IMG_Installer.png");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/current.png") {
        filepath = path.join(__dirname, "public", "current.png");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/lccircuit.png") {
        filepath = path.join(__dirname, "public", "lccircuit.png");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/solenoid.png") {
        filepath = path.join(__dirname, "public", "solenoid.png");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/carousel.js") {
        filepath = path.join(__dirname, "public", "carousel.js");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "application/javascript"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/darkmode.js") {
        filepath = path.join(__dirname, "public", "darkmode.js");
        fs.readFile(filepath, (err, data)=> {
            res.writeHead( 200, {"Content-Type": "application/javascript"});
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/message" && req.method === "POST") {
        let dataoutput = "";

        req.on("data", chunk => {
            dataoutput += chunk.toString();
        });

        req.on("end", () => {
            let params = new URLSearchParams(dataoutput);

            let name = params.get("name");
            let email = params.get("email");
            let message = params.get("message");

            console.log("-----------");
            console.log("New message");
            console.log("-----------");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Message received");
        });
    }
    else {
        res.writeHead(404);
        res.end("Not found");
        return;
    }
});


port=4000
server.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
});
