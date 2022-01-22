/*CMD
  command: /start
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

var button = [{ title : "✓ Check" , command : "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(button , "*╔ [ ! ]Join Main Channel to continue to \n║ main menu: \n║\n╠ [+] -> @FireRepo\n║\n╠ [+] -> @itssuyashconfigs\n║\n╚ [×] ✓ Done Subscribed? Click Check! *")

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*[ ! ]You're Trying To Invite You're Self*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(0.0)
Bot.sendMessageToChatWithId(refUser.chatId, "*[+] New Referral - *"+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"*\nReward only if user joins our channels!*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*[ ! ] You Already Started The Bot*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(1326749214,
    "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = "+user.first_name+"\n\n👮🏻‍♂Username =* " +
      user_link +
      " \n\n*💳User Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
