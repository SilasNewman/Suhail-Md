const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348147034635";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_43_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZLR2xqSWFncHlyNDZQRkNNVUJRV0tscmptYlBkbk9ZRm43cFExVkgrSkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NzAzNDYzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkNGMzZBQTVEMDRFRkMzOTBFM0I1Q0JBMDdDMjMxNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjgzMDI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1lTEJ6ZmtrU011NDZaaXNfUG1rRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJlZGQyNzYtODQ5MC00MWEzLWJlYTMtZGY5NDU0MmFmZTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTcyLFxuICAgICAgNzUsXG4gICAgICAyMCxcbiAgICAgIDI1MCxcbiAgICAgIDE4MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3NyxcbiAgICAgIDE0LFxuICAgICAgNTIsXG4gICAgICA4MCxcbiAgICAgIDIxNyxcbiAgICAgIDEzOCxcbiAgICAgIDE1OSxcbiAgICAgIDIsXG4gICAgICAyNTAsXG4gICAgICAzOCxcbiAgICAgIDEwMCxcbiAgICAgIDE0MSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgMjIsXG4gICAgICAxNzIsXG4gICAgICA2OCxcbiAgICAgIDIxNyxcbiAgICAgIDE5MSxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgMjMxLFxuICAgICAgMTAzLFxuICAgICAgMTAyLFxuICAgICAgMjEzLFxuICAgICAgNDMsXG4gICAgICA1OSxcbiAgICAgIDE3OCxcbiAgICAgIDEyNixcbiAgICAgIDI1NSxcbiAgICAgIDEwNSxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHQk1aRDk0UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NzAzNDYzNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlMtRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiMzY1NTE2ODE3MjI4NjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTy9uMFFRekkrQnRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhkZDR5V1ZrUWd3bUljTW5uYUVUc1d0TTFmVUZUQ0pHcVRoamlnYU8vU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXhienZjMHJxd1gwNWJJRk14aDRTTUFlOG5RVmR6TDFNZThWMjdBTEk2WEYwWmpCQjdFTittL1pTc3VSZVdIcDh5VzZoR3hMTVpWVVM2bUU5L0VIQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOHdLQmxPcE5GanJCMENqUTJaQ1pzV2VCVC9jVjYyVzZrWDY3bzU1SnNUdGRaVysveGZrVjFUeTVDcWpCOVQ5MVkwSHVMUDJVS0laUVFYaFFyWDhyQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NzAzNDYzNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2ODMwMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIRGFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhEYS5qc29uIjogIntcImtleURhdGFcIjpcIjExUHNzRUlSTC9kMFlEU0pvcW9FL1M0RlNIQmdjTy9WT1Avemc0Ri9XN2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzMTIyMzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2NjU0Mzg4NjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
