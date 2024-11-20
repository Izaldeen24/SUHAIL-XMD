const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233206448070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_06_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9OSHVHcG05YTgrSmJpWE5LTEViVEJkRGNIOEUrYk1sTkpZa1RFV3lqc1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjA2NDQ4MDcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RkEyRkM0RkRENjlCNTRGODk0Q0M1NjlBMTQ4MzYyQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIxMDgwMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWE0wV3NtUUxRLUNJbm02ZzFIclVDUVwiLFxuICBcInBob25lSWRcIjogXCIyYTU2Yjk5Ni01OWYzLTQ2MjktOThkYi0zMDg5MDE1ZjJlZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgODMsXG4gICAgICA1MCxcbiAgICAgIDE5OSxcbiAgICAgIDMzLFxuICAgICAgMzgsXG4gICAgICAxNDksXG4gICAgICAyMDEsXG4gICAgICA4MCxcbiAgICAgIDIwLFxuICAgICAgNzQsXG4gICAgICA0LFxuICAgICAgOCxcbiAgICAgIDUwLFxuICAgICAgMTgwLFxuICAgICAgODcsXG4gICAgICAzNCxcbiAgICAgIDQsXG4gICAgICAxLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjQwLFxuICAgICAgNCxcbiAgICAgIDksXG4gICAgICAyNTIsXG4gICAgICAxMDcsXG4gICAgICAxMjcsXG4gICAgICAyNixcbiAgICAgIDE4LFxuICAgICAgNDMsXG4gICAgICAyMyxcbiAgICAgIDE0OSxcbiAgICAgIDE5LFxuICAgICAgMjM0LFxuICAgICAgMzYsXG4gICAgICAxMzcsXG4gICAgICA0NixcbiAgICAgIDg3LFxuICAgICAgMjksXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMOFFGOVkzQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjA2NDQ4MDcwOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTA4ODIwNzU2NzI3OTQ6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmFKODQ4REVPUzk5N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKK3UxWFhUc0dSR1dEU0hJbk5Bc05TVFlzYnh5c1gveFNjbzZiaHExYkZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBHdXNaODBwQXpwbDFRM1Y4T010WXlXSnUxTmIrN1NGQVNaQ1pLL1FIOTRUOExZcm5hSnZJS3huOFE1WmZwMXMxTXQ4SE5vekFpaEVhaTRyc21DNEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInEzVlR1aHJTSm9hVmJHUFZ5T2poSURGZmFJYS9hSytxUUgxWGZEL1RLVUpFajNSNm9GdzRxMDlJYThxRTlBOUVmcjhYNEpLMWtYQm1sUURFeTU2NmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzIwNjQ0ODA3MDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTA4MDA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTloXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFOWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtS211Yk1Rb2IySGgwOEpXU3FTNVEwWFhrekJVOURhR252UW9yNk5ucmMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzODY0OTA0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "IZALDEEN",
  ownername:process.env.OWNER_NAME|| "IZALDEEN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "IZALDEEN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
