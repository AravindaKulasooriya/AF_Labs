//Part_2
const os = require('os');

//Part_2
const fs = require('fs');

//Part_5
const http = require('http');

//Part_2
//console.log('Architecture '+ os.arch());
//console.log('CPUs '+ os.cpus().length);
//console.log('OS ' + os.platform());

//Part_3
//const fileName = __dirname + '/test.txt';

//Part_3
/*fs.readFile(fileName, (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data.toString());
});*/

//Using Promises
/*const promise = new Promise(function (resolve, reject) {
    fs.readFile(fileName, (error, data) => {
        if (error) {
            reject(error);
            return;
        }

        resolve(data.toString());
    });
});

promise.then(function (data) {
    console.log(data)
});*/

//Part_3
//const data = fs.readFileSync(fileName);
//console.log(data.toString());

//Part_4
/*const fileName = __dirname + '/test.txt';
const outfileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outfileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});*/

//Part_5
//http.createServer((request,response) => {
   // response.setHeader('Content-Type', 'text/html');
   // response.write('<h1>Hello World</h1>');
  //  response.end();
//}).listen(3000);

http.createServer((request,response) => {
    response.setHeader('Content-Type', 'text/html');

    switch (request.method) {

        case 'GET' :
            response.write('<h1>Hello World</h1>');
            response.end();
            break;

        case 'POST' :
            request.on('data', data => {
                response.write('<h1>'+ data + '</h1>');
                response.end();
            });
            break;
    }

}).listen(3000, (error) => {
    console.log('Server is listening to port 3000');
});

