const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1264216343:AAEP_noLCt5ExZ0bjF8AE102im61IGlhJew'
const debug = require('./helpers')
console.log("Bot has been started!")
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

/* bot.on('message', msg => {
    const {id} = msg.chat
    bot.sendMessage(id, debug(msg))
    .then(() => {
        console.log('Message send')
    }).catch((error) => {
        console.error(error)
    })
}) */
/* bot.onText(/\/start/, msg => {
    const {id} = msg.chat
    bot.sendMessage(id, debug(msg))
})
bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const {id} = msg.chat
    bot.sendMessage(id, debug(match))
}) */
bot.on('message', msg => {
    const html = `
    <strong>Hello ${msg.from.first_name}</strong>
    <pre>
        ${debug(msg)}
    </pre>`
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML'
    })
})