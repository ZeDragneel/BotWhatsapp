import fs from 'fs'
function handler(m, { conn }) {
let text = `
*πΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©* 
*Wa.me/50576796164 (Owner)*
*Wa.me/50578229009 (BOT)*
*https://www.instagram.com/josedev2nc*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π¦πππ‘π’ππ·ππ½ | ππΌππ²π­ππ',
body: 'ππ«ππππ¨π« | ππ«πππ­π¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/50576796164`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `π§‘ *Eso son los contactos para ti.*\nπ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/josedev2nc', 'ππ£π¨π©πππ§ππ’', null, null, [
['π  ππ£ππ€π§π’πππΓ³π£ | ππ£ππ€π§π’ππ©ππ€π£', '.infobot'],
['π πΏπ€π£ππ§ | πΏπ€π£ππ©π', '.donar'],
['β ππ§ ππ‘ ππ£ππππ€ | ππ€ π©π€ π¨π©ππ§π©', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
