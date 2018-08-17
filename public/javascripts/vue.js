// Your JavaScript goes here

var randomNumber = Math.floor(Math.random() * 100) + 1;
//randomNumber:被分配一個1到100之間的隨機數，使用數學算法計算。

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
//guesses,lastResult,lowOrHi 用於存儲對HTML中的結果段落的引用，並用於在代碼的後面段落中插入值： 

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
//存儲對表單文本輸入和提交按鈕的引用，並用於控制以後提交猜測

var guessCount = 1;
var resetButton;
//儲存一個猜測計數1（用於追蹤玩家猜了多少次）以及一個尚未存在的引數

function checkGuess() {
    var userGuess = Number(guessField.value);
    //宣告userGuess變數,並將值設置為在文本中輸入的當前值,Number為確保該數值為數字

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    //玩家是不是第一次猜數字

    guesses.textContent += userGuess + ' ';
    //userGuess值附加到guesses段落的末尾，並加上一個空格，因此在每個猜測值之間將有一個空格。    

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
        //查用戶的猜測是否等於在代碼頂端設置的randomNumber值。如果是，則玩家猜對了，遊戲勝利，
        //向玩家顯示一個漂亮的綠色的祝賀信息，並清除猜測信息框的內容

    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
        //如果猜測次數達到10次,則回傳gameover  

    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    //表示還有次數但猜錯了,會回傳數字大還小

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
//guessCount每次加一,並清空值

guessSubmit.addEventListener('click', checkGuess);
//為guessSubmit按鈕添加了一個監聽事件,兩個參數為監聽類型,要執行的代碼

function resetGame() {
    guessCount = 1;
    //將guessCount重置為1。

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    //清除所有信息段落。  

    resetButton.parentNode.removeChild(resetButton);
    //刪除resetButton

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    //清空和聚焦文本字段，準備接受用戶輸入的新猜測

    lastResult.style.backgroundColor = 'white';
    //lastResult刪除背景顏色。

    randomNumber = Math.floor(Math.random() * 100) + 1;
    //生成一個新的隨機數，這樣下次您就是在猜測新的數字 

}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //遊戲結束後無法輸入及按按鈕
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    //建立新的button,命名為start new game    
    resetButton.addEventListener('click', resetGame);
    //在新按鈕上設置了一個監聽器，當它被點擊時，執行resetGame()。    
}

var data = "/users";
var mydata = {};
$.ajax({
    url: data,
    success: function (res) {
        //console.log(res);
        datafunction(res);
        //console.log(mydata);                
    }
});
function datafunction(mydata) {
    var text = '';

    for (i in mydata) {
        //console.log(i);
        if (i == 'menu') {
            var buttondata = '';
            for (x = 0; x < mydata.menu.length; x++) {
                buttondata += "<button>" + mydata.menu[x] + "</button>";
            } 
            text += "<li>" + i + ":" + mydata[i] + buttondata + "</li>";
        } else {
            text += "<li>" + i + ":" + mydata[i] + "</li>";

        };


    }
    $("#datalist").append(text);
}

