const request = require('request') 
const colors = require('colors'); 

/* 

@ Вся информация по правильной установки скрипта находится на гитхабе https://github.com/Nubovik01/COVID19_Emojis в файле README.md

@ v1.8, script by Nubovik (https://vk.com/nubovik01) 
*/ 

token_covid19 = `токен_от_covid19`
changeOnTime = `5000`
let CovidEmojiesIDs = [["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"], ["10"], ["11"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"], ["18"], ["19"], ["20"], ["21"], ["22"], ["23"], ["24"], ["25"], ["26"]]

let timer = setInterval(() => { 

let rn = Math.floor(Math.random() * CovidEmojiesIDs.length) 
console.log(`Изменён эмодзи-статус. (ID Emoji: ${CovidEmojiesIDs[rn]})`) 
request.get(`https://api.vk.com/method/users.setCovidStatus?v=5.103&status_id=${CovidEmojiesIDs[rn]}&access_token=${token_covid19}`) 

}, changeOnTime); 

let uvedomleniya = setInterval(() => { 
console.log('Нашли баг/ошибку? Сообщите в сообщество: https://vk.com/nubovik02'.green) 
}, 15000);
