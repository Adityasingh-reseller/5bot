/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 5 ){
Bot.sendMessage("*[ ! ]* _Minimum Withdraw 5 Points_")
}else{
if(message > balance.value()){
Bot.sendMessage("[ ! ] Maximum Withdraw "+balance.value().toFixed(2)+" Points_")
}else{
Bot.sendMessage("*╔ [~] Request Sent \n║\n╠ [₹] Account Details = Generating....\n╠ [$] Plan Details = "+message+" Points\n╠ [$] User ID = "+wallet+"\n║\n╚ [..] May Be It Will Take Upto 24 Hours \n           To Complete Your Order*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "1960533911", 
text: "*╔ [ ! ] New Approved Payout \n║\n╠ [..]Status = Confirmed\n╠ [_] User ID = "+user.telegramid+"\n╠ [$] Plan = "+message+" Points*\n║\n*╠ [_] User Id =* "+wallet+"\n║\n╚ [&] Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
Bot.sendMessageToChatWithId(-1001736157673, "*╔ [ ! ] New User Withdraw \n║        Requested.\n║\n╠ [⚥] User :- "+user.first_name+"\n╠ [_] Id :- "+user.telegramid+"\n╠ [$] Plan :- "+message+"\n║\n╚ [&] Bot :- @"+bot.name+"*")
