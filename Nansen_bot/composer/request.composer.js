const { Composer } = require ('telegraf')
const request = new Composer()

//Функция "отлова сообщения"
request.on('message', async (ctx) => {
        if(ctx.message.text) {
            const word = ctx.message.text.toLowerCase()
            try {
                switch (word) {
                    case "варшава":
                        await ctx.reply(`
Сборщики подписей в Варшаве
Анна - @anoushkaaa Telegram
Валерия - Lerasanni0@gmail.com Email
`)
                        break

                    case "краков":
                        await ctx.reply(`
В Кракове можно написать в группу https://www.facebook.com/KrkOpposition
Собирают подписи:
Анна @anna_ezh Telegram
Зарина +48517394649 Tel.
`)
                        break

                        case "гданьск":
                        await ctx.reply(`
Сборщик подписей в Гданьске:
Марина - https://www.facebook.com/profile.php?id=100028005726774 Facebook
`)
                        break

                        case "ополе":
                        await ctx.reply(`
Сборщик подписей в Ополе:
Максим - @byzomax Telegram
`)
                        break

                    case "щецин":
                        await ctx.reply(`
Сборщик подписей в Щецине:
Максим - @Maxnowo Telegram  
                        `)
                        break

                    case "гожув-велькопольски":
                        await ctx.reply(`
В Гожуве собирает подписи:
Федор @skrebnev_f Telegram
`)
                        break

                    case "познань":
                        await ctx.reply(`
В Познане собирают подписи:
Олеся https://www.facebook.com/olesia.kovalenko.1 Facebook
Елена https://www.facebook.com/elena.kushnir.56 Facebook
`)
                        break

                    case "быдгощ":
                        await ctx.reply(`
Сборщик подписей в Быдгощ:
Юля - https://www.facebook.com/silverchiffa Facebook
Алексей - @AleksiKomar Telegram
`)
                        break

                    case "вроцлав":
                        await ctx.reply(`
Сборщик подписей во Вроцлаве:
Айдар - @aidar5_vsv Telegram
Александра - https://www.facebook.com/profile.php?id=100003438403123 Facebook
Aлес - @grayner Telegram, https://www.facebook.com/groups/406535727984311/?ref=share Facebook
                        `)
                        break

                    case "список городов":
                        await ctx.reply(`
На данный момент подписи собираются:
/krakow
/warszawa
/poznan
/gorzow_wlkp
/lodz
/bydgoszcz
/wroclaw
                        `)
                        break

                    case "спасибо":
                        await ctx.reply('Не за что! Рад был вам помочь!')
                        break

                    default:
                        await ctx.reply(`
На данный момент подписи собираются:
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

                } catch (e) {
                    //Обработчик для более точного пониманя, что в сообщении было больше одного ключевого слова
                    if(e.response.description.includes('Bad Request: message to delete not found') === true) {
                        return console.log('окей, там несколько ключевых слов, я не упал')
                    }
                    console.log(e)        
                }
            }
        })

module.exports = request