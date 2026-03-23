// HTMLの中から、操作したい要素（部品）を見つけて変数に入れます
const button = document.getElementById('actionButton');
const message = document.getElementById('message');

// ボタンがクリックされたときの動作を設定します
button.addEventListener('click', function() {
    // 文字の内容を変更します
    message.textContent = 'JavaScriptが動きました！大成功です🎉';
    
    // 文字の色も赤色に変更してみます
    message.style.color = 'red';
    message.style.fontWeight = 'bold';
    
    // ついでにボタンの文字も変えてしまいます
    button.textContent = '完了！';
});