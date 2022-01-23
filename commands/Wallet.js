/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*╔ Send Your Plan Type
╠ [Basic - 5 Points]
╚ [Premium - 8 Points]*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*╔ [→] Your Zee5 Plan Set To "+message+"╚ [→] To Change The Plan Type /setplan*")
