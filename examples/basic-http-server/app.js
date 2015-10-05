var fs = require('fs');

fs.readFile('/', function (err) {
    if(err) throw err;

    console.log('completed');
});
