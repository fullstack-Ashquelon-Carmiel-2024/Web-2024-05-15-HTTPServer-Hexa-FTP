// http - HyperTextTransferProtocol - בין דפדפן לשרת אינטרנט
// tcp - בין מחשב לבסיס נתונים
// ftp - FileTransferProtocol - העלאת קבצים לשרת כלשהו

const http = require('http');

const port = 3050;

// req - request - הבקשה של הדפדפן
// res - response - התגובה של השרת
const server = http.createServer((req, res) => {

    res.end(`Hello, I'm cute little server 🙄`)

});

// '127.0.0.1','localhost'

server.listen(port,'127.0.0.1',() => {
    console.log(`Listening on port ${port}`)
})

// to request something from the browser, type
// in the address line:
//  localhost:3050
// or
//  127.0.0.1:3050
