
//   GET /html

const http = require('http');

const result = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/html') {
        res.writeHead(200, { "Content-Type": "text/html" });
        const htmlContent =
        `<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>`;

        res.end(htmlContent);
        console.log("response sended");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
    }
});
result.listen(8080, () => {
    console.log("Server started");
})




const result1 = http.createServer((req,res)=>{

    if(req.method === 'GET' && req.url === '/json'){
        res.writeHead(200,{ "Content-Type" : "application/json"});

        const httpContent = {
            "slideshow": {
              "author": "Yours Truly",
              "date": "date of publication",
              "slides": [
                {
                  "title": "Wake up to WonderWidgets!",
                  "type": "all"
                },
                {
                  "items": [
                    "Why <em>WonderWidgets</em> are great",
                    "Who <em>buys</em> WonderWidgets"
                  ],
                  "title": "Overview",
                  "type": "all"
                }
              ],
              "title": "Sample Slide Show"
            }
          };

        res.end(JSON.stringify(httpContent));
        console.log("response sended");

    }else{

        res.writeHead(404,"Internal error");
    }
});

result1.listen(8080, ()=>{
    console.log("Server started");
})




const result2 = http.createServer((req,res)=>{

    if(req.method === 'GET' && req.url === '/json'){

        res.writeHead(200, {"Content-Type" : "application/json"});

        const content = {
            "uuid": "14d96bb1-5d53-472f-a96e-b3a1fa82addd"
          };
        res.end(JSON.stringify(content));
        console.log("response sended successfully");
    }else{
        res.writeHead(404, {"Content-Type" : "text/plain"});
    }
})

result2.listen(8080, ()=>{
    console.log("Server started");
})



const result3 = http.createServer((req,res)=>{

    if(req.method === 'GET'){

        
        const data = req.url;
        const array = data.split('/');
        
        res.writeHead(array[2], {"Content-Type" : "text/plain"});
        res.end(array[2]);
        console.log("response sended");

    }else{
        res.writeHead(404, {"content-Type" : "text/html"});
    }
})

result3.listen(8080,()=>{
    console.log("server started");
})



const result4 = http.createServer((req,res)=>{

    if(req.method === 'GET'){

        res.writeHead(200, {"Content-Type": "text/plain"});

        const data = req.url;
        const array = data.split('/');

        const delayTime = array[2];

        if(isNaN(delayTime)){
            res.end("Enter the correct delay time ");
            return ;
        }

        setTimeout(()=>{
            res.end(`Returning after ${delayTime} Seconds`);
        },delayTime*1000);   


    }else{
        res.writeHead(400);
    }
});

result4.listen(8080,()=>{
    console.log("server started");
})