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
