const https = require('http');

ver server = https.createServer(
　(request,response)=>){
    response.end('Hello Node.js!');
  }
);
server.listen(3000);