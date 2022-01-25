/*CMD
  command: [~] Generate Account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*[ ! ] You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("*╔ [ ! ] Zee5 PlanNot set\n╚ [?] To set plan Type* /setplan")
}else{
if (balance.value() < 5){
Bot.sendMessage("*[ ! ] Minimum Plan is of 5 Points*")
}else{
Bot.sendMessage("*[₹] Enter Amount To Generate Account*")
Bot.runCommand("Auto")
}
}}
