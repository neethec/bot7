import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSNayJdDb/`
let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/tiktok?apikey=YT:LORENZOBOTMD&url=${text}`)
let f = await res.json()
    let json = f.result
conn.reply(`Proses kak @${m.sender.split(`@`)[0]}`)
 await conn.sendFile(m.chat, json.audio, 'error.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: hwaifu.getRandom(), 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(hwaifu.getRandom())).buffer(),
 thumbnailUrl: sgc,
 title: json.nickname }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
handler.limit = true
export default handler