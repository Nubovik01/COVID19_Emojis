const request = require('request') 

token_covid19 = `токен_от_covid19`
changeOnTime = `5000`

let CovidEmojiesIDs = [["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"], ["9"], ["10"], ["11"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"], ["18"], ["19"], ["20"], ["21"], ["22"], ["23"], ["24"], ["25"], ["26"]]

let timer = setInterval(() => { 
  let rn = Math.floor(Math.random() * CovidEmojiesIDs.length) 
  console.log(`Изменён эмодзи-статус. (ID Emoji: ${CovidEmojiesIDs[rn]})`) 
  request.get(`https://api.vk.com/method/users.setCovidStatus?v=5.103&status_id=${CovidEmojiesIDs[rn]}&access_token=${token_covid19}`) 
}, changeOnTime);
