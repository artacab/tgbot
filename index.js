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
bot.on('callback_query', query => {
    //bot.sendMessage(query.message.chat.id, debug(query))
    bot.answerCallbackQuery(query.id, `${query.data}`)
})