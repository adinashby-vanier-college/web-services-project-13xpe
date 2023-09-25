const fs=require("fs");

const http=require("http");

const server= http.createServer((req, res) => {
    //console.log("Hello Crypto guys");
    res.setHeader("Content-Type", "text/html");
    let path="./views/";
    switch(req.url){
        case"/":
        res.statusCode=200;
        path+="index.html";
        break;
        case"/about":
        res.statusCode=200;
        path+="about.html";
        break;
       
            case"/about-us":
           
            res.statusCode=301;
            res.setHeader("Location","/about");
            res.end();
            break;

            default:
        res.statusCode=404;
        path+="404.html";
        break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    });
});
    //console.log(req.url,req.method);
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Hello Vanier Students");
//     res.write("At park ex");
//     res.end();
// });

server.listen(3000, "localhost", () =>{
    console.log("Listening for requests on port 3000");
});
