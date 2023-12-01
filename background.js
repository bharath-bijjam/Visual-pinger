let tg = {
    token: "5996112758:AAF4eCQN-eR-O-dCPBzRkDCuaSO_mydDQ24", // Your bot's token that got from @BotFather
    chat_id: "-903446233" // The user's(that you want to send a message) telegram chat id
  }

function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: text // The text to send
    };
    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
}

function inform(){
    var temp = document.getElementsByClassName("sc-lknQiW ewfiMM");
    console.log(temp);
    if(temp.length==0){
        sendMessage("Hey Bharath You got a Question");
        console.log("SEnt the message");
    }
}

setTimeout(inform,30000);