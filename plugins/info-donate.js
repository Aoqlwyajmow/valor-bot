let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`🇮🇳 ᴅᴏᴍᴇsᴛɪᴄ ᴩᴀʏ :
⮕ Qris All Payment
★ sᴄᴀɴ ǫʀ ᴄᴏᴅᴇ ﹠ ᴅᴏɴᴀᴛᴇ ᴠɪᴀ
Gopay, OVO , DANA, Bank Transfer, ᴇᴛᴄ.

💱 ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴩᴀʏ :
⮕ PᴀʏPᴀʟ
★ ᴄʟɪᴄᴋ ᴏɴ ᴩᴀʏᴩᴀʟ ʟɪɴᴋ ᴛᴏ ᴍᴀᴋᴇ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴛʀᴀɴsᴀᴄᴛɪᴏɴ.`, './media/donate.jpg', 'https://www.paypal.me/oohhookk', 'PᴀʏPᴀʟ', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m)
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler