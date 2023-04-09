var user_name = "mia";

var terminal = null;				
var screenWidth, screenHeight;	
var Initial_command = "mia@Commander:/home/" + user_name + "$ ";
var value = "";	// ターミナル画面上の文字列取得

var first_command = "\n [sudo] password for " + user_name + " : ";

function setTerminal(){
	// ブラウザのウインドウサイズを取得
	let innerWidth =  window.innerWidth;
	let innerHeight = window.innerHeight;
	
	// textareaのサイズをウインドウにフィットさせる
	terminal.style.innerWidth  = innerWidth + "px";
	terminal.style.innerHeight = innerHeight + "px";
}


window.addEventListener("load", function(){
	// textareaのDOM取得
	terminal = document.getElementById("terminal");

	setTerminal();
	// ターミナルの初期状態（textareaタグの文字列にプロンプトを表示）
	terminal.value = Initial_command;
	// ターミナル（textareaタグ）にフォーカス ==>カーソルが点滅する
	terminal.focus();
});

window.addEventListener("resize", function(){
	setTerminal();
});


window.addEventListener("keyup", function(e){
	// キー番号を取得
	let key = e.keyCode;
	
	// Enterキーが押されたとき
	if(key == 13){
		value = terminal.value;	// textareaの文字列を取得
	
		if(value.match(/\n$/) == null){	// 漢字変換でEnterキーを押した場合
			return;										// 取得した文字の最後が改行文字ではないので何もしない
		}

        let num = Math.floor(Math.random() * 10) + 1;
        alert(num);

        num = 1;

        switch (num) {
            case 1:
		        terminal.value = value + first_command;
		        console.log("[" + value + "]");
		        terminal.focus();
                break;

            default:
                terminal.value = value + Initial_command;
		        console.log("[" + value + "]");
		        terminal.focus();
        }
	}
});


window.addEventListener("")