const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1264216343:AAEP_noLCt5ExZ0bjF8AE102im61IGlhJew'
const debug = require('./helpers')
const fs = require('fs')
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
//отправка картинки
/* bot.onText(/\/pic/, msg => {
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/raul.jpg'))
})
bot.onText(/\/pic2/, msg => {
    bot.sendPhoto(msg.chat.id, './raul.jpg', {
        caption: 'Hala madrid'
    })
}) */
/* bot.onText(/\/audio/, msg => {
    bot.sendAudio(msg.chat.id, './filatov-karas_-_chilit.mp3')
}) */
//отправка аудио
/* bot.onText(/\/audio2/, msg => {
    bot.sendMessage(msg.chat.id, 'Start audio uploading...')
    fs.readFile(__dirname + '/filatov-karas_-_chilit.mp3', (err, data) => {
        bot.sendAudio(msg.chat.id, data).then(() => {
            bot.sendMessage(msg.chat.id, 'uploading finish')
        })
    })
}) */
//отправка документа
/* bot.onText(/\/doc/, msg => {
    bot.sendDocument(msg.chat.id, './Бланк.doc')
}) */
/* bot.onText(/\/doc2/, msg => {
    bot.sendMessage(msg.chat.id, 'Start document uploading...')
    fs.readFile(__dirname + '/Бланк.doc', (err, file) => {
        bot.sendDocument(msg.chat.id, file, {
            caption: 'additional text'
        }).then(() => {
            bot.sendMessage(msg.chat.id, 'uploading finish')
        })
    })
    
}) */