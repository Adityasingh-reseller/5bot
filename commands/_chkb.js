/*CMD
  command: /chkb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]* _Sent User Id to check Balance_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message=="[×] Cancel"){
Bot.runCommand("Dev");
}else{
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*[₹] User Balance = "+user_bal.value().toFixed(2)+"*")
}
