# COVID19_Emojis)
Автоматическое изменение эмодзи-статуса через VK-токен приложения COVID-19.

# Установка модуля "request"
Для установки модуля "request" нужно зайти командную строку, далее написатъ "cd <папка_со_скриптом(полный_путь)", и написатъ "npm i request" без ковычек.

# Установка модуля "colors"
Для установки модуля "colors" нужно зайти командную строку, далее написатъ "cd <папка_со_скриптом(полный_путь)", и написатъ "npm i colors" без ковычек.

# Получение токена от COVID-19.
Токен нужно получить строго из приложения COVID-19 и вставить в переменную "token_covid19" ибо с другими приложениями не работает.
Не знаете как получить токен? https://www.youtube.com/watch?v=gSB2O2TcDpE
Приложение COVID-19: https://vk.com/covid19

# Интервал через который будет изменятся эмодзи-статус.
Укажите время в миллисекундах, через которое будет изменятся эмодзи-статус в переменную "changeOnTime". Например: 5 секунд = 5000 миллисекунд.

# Нет Node.js?
Если у вас нет на компьютере программы "Node.js" то, скачайте. https://nodejs.org

# Другое...
!!! Warning: Будут ставится рандомные эмодзи из переменной "CovidEmojies", а не по порядку.
Прямо сейчас доступно только 17 эмодзи.
