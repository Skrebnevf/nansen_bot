const { Composer } = require ('telegraf')
const command = new Composer()
const text = require ('../const')

//Обработка команды /start возможно пригодится в будующем
command.command('start', async (ctx) => {
	try {
		await ctx.reply(`
Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Я могу тебе подсказать где ты можешь подписать петицию! нажми на город в списке или введи название города кирилицей, все города совпадают со списком ниже!
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
	} catch (e) {
		console.log(e)
	}
})

command.command('warszawa', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщики подписей в Варшаве:
Анна - @anoushkaaa Telegram
Валерия - Lerasanni0@gmail.com Email
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('krakow', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
В Кракове можно написать в группу https://www.facebook.com/KrkOpposition
Собирают подписи:
Анна @anna_ezh Telegram
Зарина +48517394649 Tel.
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('poznan', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
В Познане собирают подписи:
Олеся https://www.facebook.com/olesia.kovalenko.1 Facebook
Елена https://www.facebook.com/elena.kushnir.56 Facebook
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('gorzow_wlkp', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
В Гожуве собирает подписи:
Федор @skrebnev_f Telegram
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('lodz', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей в Лодзе:
Дмитрий - @Dlaklientov888 Telegram
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('bydgoszcz', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей в Быдгощ:
Юля - https://www.facebook.com/silverchiffa Facebook
Алексей - @AleksiKomar Telegram
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('wroclaw', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей во Вроцлаве:
Айдар - @aidar5_vsv Telegram
Александра - https://www.facebook.com/profile.php?id=100003438403123 Facebook
Aлес - @grayner Telegram
Группа Facebook https://www.facebook.com/groups/406535727984311/?ref=share 
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('opole', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей в Ополе:
Максим - @byzomax Telegram
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('gdansk', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей в Гданьске:
Марина - https://www.facebook.com/profile.php?id=100028005726774 Facebook
    `)
	} catch (e) {
		console.log(e)
	}
})

command.command('szczecin', async (ctx) => {
	try {
		await ctx.reply(`
${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}
Сборщик подписей в Щецине:
Максим - @Maxnowo Telegram
    `)
	} catch (e) {
		console.log(e)
	}
})

module.exports = command