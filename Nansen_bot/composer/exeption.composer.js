const { Composer } = require ('telegraf')
const exeption = new Composer()

// Понимание того, что содержится в сообщении, возможно пригодится в будующем
exeption.on('video', async (ctx) => {
    if(ctx.update.message.message_id) {
        await ctx.reply(`
Хорошый видосик ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Но я лучше дам тебе список где можно подписать питицию:
/krakow
/warszawa
/poznan
/gorzow_wlkp
/lodz
/bydgoszcz
/wroclaw
/opole
/gdansk
/szczecin
`)
    }
})

exeption.on('photo', async (ctx) => {
    if (ctx.update.message.photo) {
        await ctx.reply(`
Хорошая картинка ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Но я лучше дам тебе список где можно подписать питицию:
/krakow
/warszawa
/poznan
/gorzow_wlkp
/lodz
/bydgoszcz
/wroclaw
/opole
/gdansk
/szczecin
`)
    }
})
exeption.on('sticker', async (ctx) => {
    if(ctx.update.update_id) {
        await ctx.reply(`
Хорошый стикер ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Но я лучше дам тебе список где можно подписать питицию:
/krakow
/warszawa
/poznan
/gorzow_wlkp
/lodz
/bydgoszcz
/wroclaw
/opole
/gdansk
/szczecin
`)
    }
})


module.exports = exeption