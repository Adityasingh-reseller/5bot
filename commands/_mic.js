/*CMD
  command: /mic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: sent message

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid == 1960533911){
Bot.runAll({ 
command: "broadcastforad",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*[#] Message Sended To All Users*")
}else{
Bot.sendMessage("*[*] Bot By @Firerepo*")
}
