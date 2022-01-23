/*CMD
  command: /bab
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]* _How Much Balance you want To Add_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1960533911"
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*╔ [_] Succesfully Added Balance\n╠ [⚥] User = "+tgid+"\n╚ [₹] Amount= "+amount+"*");
}else{
return
}
