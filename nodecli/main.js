/**
 *  
 * 
 * コマンドライン引数からファイルパスを取得する
 * 
 * 
*/

const commander = require('commander');
commander.parse(process.argv);

/** 
 * このプログラムを引数を渡した状態で実行すると、commander の中にある args[] に引数の文字列が配列で保存される。
 * 以下を試すとわかる。
*/
// console.log(commander);

/**
 * コマンドライン引数の最初を取得してみる
 * commander を使用して取得すると、process.argv で取得した場合とは異なり、
 * node の実行プロセスパスと実行されたスクリプトファイルのパスは出力されない。
 * */
const filePath = commander.args[0];
console.log('commander あり', filePath);
console.log('commander なし', process.argv);
