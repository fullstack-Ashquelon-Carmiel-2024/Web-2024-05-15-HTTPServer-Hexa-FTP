const fs = require('fs');

let data1 = fs.readFileSync('./data/avocado.txt','utf8');

fs.writeFileSync('./data/health-foods.txt',data1);

let data2 = fs.readFileSync('./data/chocolate.txt','utf-8');

fs.appendFileSync('./data/health-foods.txt','\n'+data2);