function butotnClick(){
  test.innerText = textbox.value + 'に飛ぶ';
}

let textbox = document.getElementById('textbox');
let test = document.getElementById('test');

let button1 = document.getElementById('button1');
button1.addEventListener('click', butotnClick);
