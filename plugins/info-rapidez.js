let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('๐')
await m.reply('๐๐')
await m.reply('๐๐๐')
await m.reply(`โฐโฑโโฑ *๐๐๐๐๐๐๐ผ๐ฟ๐ | ๐๐๐๐๐๐* โฑโโฑโฎ`)
 
let veloz = 
`๐ *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\n๐ *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '๐๐๐ฉ๐๐ฝ๐ค๐ฉ-๐๐ฟ', url: 'https://github.com/Jose21NC/ShinoaBot'}},
{index: 2, urlButton: {displayText: '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', url: 'https://www.instagram.com/josedev2nc/'}},
{index: 3, quickReplyButton: {displayText: '๐๐ฉ๐ง๐ ๐ซ๐๐ฏ | ๐ผ๐๐๐๐ฃ', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ | ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
