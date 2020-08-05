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
}) */
/* bot.on('inline_query', query => {
    const results = []

    for (let i = 0; i < 5; i++) {
        results.push({
            type: 'article',
            id: i.toString(),
            title: 'Title' + i,
            input_message_content: {
                message_text: `Article #${i+1}`
            }
        })
    }
    bot.answerInlineQuery(query.id, results, {
        cache_time: 0
    })
}) */

const inline_keyboard = [
    [
        {
            text: 'reply',
            callback_data: 'reply'
        },
        {
            text: 'forward',
            callback_data: 'forward'
        }
    ],
    [
        {
            text: 'edit',
            callback_data: 'edit'
        },
        {
            text: 'delete',
            callback_data: 'delete'
        }
    ]
]




bot.onText(/\/start/, (msg, [source, match]) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup: {
            inline_keyboard
        }
    })
})

bot.on('callback_query', query => {

    const {chat, message_id, text} = query.message
    switch(query.data) {
        //пересылка сообщения
        case 'forward':
            bot.forwardMessage(chat.id, chat.id, message_id)
            break
        //ответ на сообщение
        case 'reply':
            bot.sendMessage(chat.id, 'Отвечаем на сообщение', {
                reply_to_message_id: message_id
            })
            break
        //редактирование сообщения
        case 'edit':
            bot.editMessageText(`${text} (edited)`, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {inline_keyboard}
            })
            break
        //удаление сообщения
        case 'delete':
            bot.deleteMessage(chat.id, message_id)
            break
    }
    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
})