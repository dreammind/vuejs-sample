const express = require('express')
const app = express();
var server = require('http').Server(app);


// frontendをwebpack化したdistのコンテンツを表示する。
//   $ cd ../frontend
//   $ yarn build
//   ... ./distにwebpack化したコンテンツを生成する。

app.use(express.static('dist'));

server.listen(3000);
console.log('listen port 3000');

