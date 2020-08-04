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
/* bot.on('message', msg => {
    const html = `
    <strong>Hello ${msg.from.first_name}</strong>
    <pre>
        ${debug(msg)}
    </pre>`
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML'
    })
}) */
/* bot.on('message', msg => {

    const chatId = msg.chat.id
    if(msg.text === 'Закрыть') {
        bot.sendMessage(chatId, 'Закрываю клавиатуру', {
            reply_markup: {
                remove_keyboard: true
            }
        })
    } else if(msg.text === 'Ответить') {
        bot.sendMessage(chatId, 'отвечаю', {
            reply_markup: {
                force_reply: true
            }
        })
    } else {
        bot.sendMessage(chatId, 'Clava', {
            reply_markup: {
                keyboard: [
                    [{
                        text: 'Отправить местоположение',
                        request_location: true
                    }],
                    ['Ответить','Закрыть'],
                    [{
                        text: 'Отправить контакт',
                        request_contact: true
                    }]
                ],
                one_time_keyboard: false
            }
        })
    }
}) */
bot.on('message', msg => {

    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'Inline keyboard', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'google',
                    url: 'https://google.com'
                }],
                [{
                    text: 'reply',
                    callback_data: 'reply'
                }],
                [{
                    text: 'forward',
                    callback_data: 'forward'
                }]
            ]
        }
    })
})