function butotnClick(){
  test.innerText = textbox.value + 'に飛ぶ';
}

let textbox = document.getElementById('textbox');
let test = document.getElementById('test');

let textbox_button = document.getElementById('textbox_button');
textbox_button.addEventListener('click', butotnClick);
