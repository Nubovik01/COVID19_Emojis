const request = require('request')

/*

   @ Токен нужно получить строго из приложения COVID-19 и вставить в переменную "token_covid19" ибо с другими приложениями не работает.
   @ Далее нужно указатъ время в миллисекундах, через которое будет изменятся эмодзи в переменную "changeOnTime". Например: 5 секунд = 5000 миллисекунд.
   @ !!! Warning: Будут ставится рандомные эмодзи из переменной "CovidEmojies", а не по порядку.
   @ Прямо сейчас доступно только 6 эмодзи.
   @ Если у вас нет на компьютере программы "Node.js" то, найдите в папке со скриптом файл "node-v12.16.1-x64.msi" и откройте его. Он установит "Node.js"
   @ Не знаете как получить токен? https://www.youtube.com/watch?v=gSB2O2TcDpE
   @ Приложение COVID-19: https://vk.com/covid19

   @ v1.0, script by Nubovik (https://vk.com/koder_nubovik)

   @ [+] Исправлено/добавлено: 
   @ [-] Удалено/убрано:
*/

token_covid19 = `токен_от_covid19`
changeOnTime = `через_сколько_миллисекунд_будет_изменятся_эмодзи`
	let CovidEmojies = [
	["1"],
	["2"],
	["3"],
	["4"],
	["5"],
	["6"]
	]

setInterval(async () => {
	switch (CovidEmojies) {
	case 1: NameCE = "сижу дома"; break;
	case 2: NameCE = "иногда выхожу"; break;
	case 3: NameCE = "игнорирую пандемию"; break;
	case 4: NameCE = "хожу на работу"; break;
	case 5: NameCE = "болею"; break;
	case 6: NameCE = "закупаюсь бумагой"; break;
	}
	
	let rn = Math.floor(Math.random() * CovidEmojies.length)
	console.log(`Изменён эмодзи-статус. (ID Emoji: ${CovidEmojies[rn]}) (All IDs: ${CovidEmojies})`)
	request.get(`https://api.vk.com/method/users.setCovidStatus?v=5.103&status_id=${CovidEmojies[rn]}&access_token=${token_covid19}`)
	
}, changeOnTime);