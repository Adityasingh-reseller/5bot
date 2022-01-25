/*CMD
  command: Message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[@]* _Give Account_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = User.setProperty("1960533911")
Bot.sendMessageToChatWithId(id,message)
Bot.sendMessage("*[@] Account Sended To User*")
