//ユーザーの名前を決める（inputにしたい...）
var user_name = prompt("UserNameを入力してください。");
if (user_name == 0) {
    user_name = "NameLess"
}

var terminal = null;				
var screenWidth, screenHeight;	
var Initial_command = user_name + "@Commander:/home/" + user_name + "$ ";
var value = "";	// ターミナル画面上の文字列取得

var first_command = " [sudo] password for " + user_name + " : ";
var space_command = " ";



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



//何かのキーが押されたとき
window.addEventListener("keyup", function(e){
	// キー番号を取得
	let key = e.keyCode;
	
	// Enterキーが押されたとき
	if(key == 13){
		value = terminal.value;	// textareaの文字列を取得
	
		if(value.match(/\n$/) == null){	// 漢字変換でEnterキーを押した場合
			return;										// 取得した文字の最後が改行文字ではないので何もしない
		}

        
        //ランダムに10桁のパスワード生成
        let user_password = [];
        for (let i = 0; i < 10; i++) {
            user_password.push(Math.floor(Math.random() * 10));
        }


        //1~10までの乱数を生成する
        let num = Math.floor(Math.random() * 10);
        num = 0;
        
        //生成された乱数によって実行される処理を分ける
        switch (num) {
            case 0:

                (async () => {
                    const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))
            
                    await sleep(1)
	                terminal.value = value + first_command;
                    console.log("[" + value + "]");
                    await sleep(0.7)

                    terminal.value = value + first_command
                    + user_password[0];
                    console.log("[" + value + "]");
                    await sleep(0.3)

                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1];
                    console.log("[" + value + "]");
                    await sleep(0.3)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4]
                    + user_password[5];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4]
                    + user_password[5]
                    + user_password[6];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4]
                    + user_password[5]
                    + user_password[6]
                    + user_password[7];
                    console.log("[" + value + "]");
                    await sleep(0.2)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4]
                    + user_password[5]
                    + user_password[6]
                    + user_password[7]
                    + user_password[8];
                    console.log("[" + value + "]");
                    await sleep(0.3)
                    
                    terminal.value = value + first_command
                    + user_password[0]
                    + user_password[1]
                    + user_password[2] 
                    + user_password[3]
                    + user_password[4]
                    + user_password[5]
                    + user_password[6]
                    + user_password[7]
                    + user_password[8]
                    + user_password[9];
                    console.log("[" + value + "]");
                    await sleep(1)

                    terminal.value = terminal.value + "\n" + Initial_command;
                    console.log("[" + value + "]");
                    terminal.focus();
                })()
            
                break;


            default:
                terminal.value = value + Initial_command;
		        console.log("[" + value + "]");
		        terminal.focus();
        }
	}
});



window.addEventListener("")


    
