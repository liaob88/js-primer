// コマンドライン引数の取得
console.log(process.argv);

// myModule を呼び出す
const myModule = require('./my-module');
console.log(myModule.foo);

// commander module を呼び出す
const commander = require('commander');
console.log(commander);
