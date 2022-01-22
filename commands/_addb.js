/*CMD
  command: /addb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]* _Sent User Id to add Balance_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1960533911"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bab");
}else{
return
}
