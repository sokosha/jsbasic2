//getElementById
let date = new Date();
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleString();


//getElementsByName
let list = document.getElementsByTagName('a');
console.log(list);
for (let i = 0, len = list.length; i < len; i++){
  console.log(list.item(i).href);
}

//getElementsByName
let name = document.getElementsByName('email');
console.log(name);
console.log(name[0].value);

//getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);

for( let i = 0; i < fuga.length; i++){
  //console画面に、fugaの要素、(1,2,3)を表示してください。

  // console.log(huga.[0],[1],[2]);
  console.log(fuga[i].textContent);
}

//querySelector
let tako = document.querySelector('#tako .ika');
console.log(tako);
console.log(tako.tagName);
console.log(tako.textContent);

// 宿題
console.log('宿題');
function sendValue(){
  //value値を取得する
  let result = document.getElementsByName('email').values;
  let tagp = document.createElement('p');
  let textp = document.createTexNode(result);
  document.body.appendChild(tagp).appendChild(textp);
}

// 1メソッド用意する
// ２メソッドの中に絶対実行されるであろう処理を書く
// ３取得したい値を取得してconsole
// ４pタグに格納して出力






