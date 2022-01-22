/*CMD
  command: /unbn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[√]* _Sent User Id To Unban_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1960533911"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*[√] User " +message+ " Has Been Unbanned Successfully*");
}else{
return
}
