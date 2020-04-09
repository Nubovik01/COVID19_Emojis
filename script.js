const request = require('request') 
const colors = require('colors'); 

/* 

@ Токен нужно получить строго из приложения COVID-19 и вставить в переменную "token_covid19" ибо с другими приложениями не работает. 
@ Далее нужно указатъ время в миллисекундах, через которое будет изменятся эмодзи в переменную "changeOnTime". Например: 5 секунд = 5000 миллисекунд. 
@ !!! Warning: Будут ставится рандомные эмодзи из переменной "CovidEmojies", а не по порядку. 
@ Прямо сейчас доступно только 6 эмодзи. 
@ Если у вас нет на компьютере программы "Node.js" то, найдите в папке со скриптом файл "node-v12.16.1-x64.msi" и откройте его. Он установит "Node.js" 
@ Не знаете как получить токен? https://www.youtube.com/watch?v=gSB2O2TcDpE 
@ Приложение COVID-19: https://vk.com/covid19 

@ v1.5, script by Nubovik (https://vk.com/koder_nubovik) 
*/ 

/* 

@ EmojiID: 1 - сижу дома; @ EmojiID: 2 - иногда выхожу; @ EmojiID: 3 - игнорирую пандемию 
@ EmojiID: 4 - хожу на работу; @ EmojiID: 5 - болею; @ EmojiID: 6 - закупаюсь бумагой 
@ EmojiID: 7 - выгуливаю собаку; @ EmojiID: 8 - работаю из дома; @ EmojiID: 9 - глажу кота
@ EmojiID: 10 - спасаю жизни; @ EmojiID: 11 - у холодильника; @ EmojiID: 12 - схожу с ума
@ EmojiID: 13 - анализирую статистику; @ EmojiID: 14 - пытаюсь вернуться домой; @ EmojiID: 15 - на балконе
@ EmojiID: 16 - побеждаю печенегов; @ EmojiID: 17 - строю теории заговора

*/ 

token_covid19 = `токен_от_covid19`
changeOnTime = `время_через_которое_будет_изменятся_эмодзи_статус` 
let CovidEmojiesIDs = [["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"], ["10"], ["11"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]]

let timer = setInterval(() => { 
Data = new Date(); 
Hour = Data.getHours(); 
Minutes = Data.getMinutes(); 
Seconds = Data.getSeconds(); 

let rn = Math.floor(Math.random() * CovidEmojiesIDs.length) 
console.log(`Изменён эмодзи-статус. (ID Emoji: ${CovidEmojiesIDs[rn]}) (Изменено в ${Hour}:${Minutes}:${Seconds}) (All IDs: ${CovidEmojiesIDs})`) 
request.get(`https://api.vk.com/method/users.setCovidStatus?v=5.103&status_id=${CovidEmojiesIDs[rn]}&access_token=${token_covid19}`) 

}, changeOnTime); 

let uvedomleniya = setInterval(() => { 
console.log('Нашли баг/ошибку? Сообщите в сообщество: https://vk.com/koder_nubovik'.green) 
}, 15000);