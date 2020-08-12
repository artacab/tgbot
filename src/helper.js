module.exports = {
    logStart() {
        console.log('bot is started')
    },
    getChatId(msg) {
        return msg.chat.id
    },
    getItemUuid(source) {
        return source.substring(2, source.length)
    }
}