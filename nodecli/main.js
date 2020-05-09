/**
 *
 *
 * ファイル読み込み
 *
 *
 */

const program = require('commander');
const fs = require('fs');
const marked = require('marked');

program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts()
};

fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  console.log(
    marked(file, {
      gfm: cliOptions.gfm
    })
  );
});

/**
 *
 *
 * コマンドライン引数からファイルパスを取得する
 *
 *
 */

// const commander = require('commander');
// commander.parse(process.argv);

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
// const filePath = commander.args[0];
// console.log('commander あり', filePath);
// console.log('commander なし', process.argv);
