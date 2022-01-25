/*CMD
  command: Dev
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

var key1 = "1960533911"
var key2="1179629135"
if (user.telegramid == key1 || user.telegramid == key2){
var button = [[{title:"[$] Change Balance",command:"/addb"}, {title:"[₹] Check User Balance",command:"/chkb"}], [{title:"[#] Broadcast",command:"/mic"}, {title:"[#] Broadcast Photo",command:"/brpic"}], [{title:"[@] Give Account",command:"/ask_usr"}, {title:"[{}] Generate Code",command:"/buycd"}],[{title:"[×] Ban User",command:"/bn"},{title:"[√] Unban User",command:"/unbn"}],[{title:"[•] Maintenance",command:"/Maintenance"}]]

Bot.sendInlineKeyboard(button,"*╔ Hello " +user.first_name+ "\n║\n╠ [••] Welcome To The Admin Panel\n║\n╠ [ ! ] Warning When Using This Panel \n║    Please Don't Send Any Other Command\n║    It May Spoil Your Work\n║\n╚ [_] Coded By = @Firerepo*")
}else{
Bot.SendMessage("*[ ! ] Bot By @Firerepo*")
}
