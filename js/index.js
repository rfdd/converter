let json = `{
  "Date": "2021-01-21T11:30:00+03:00",
  "PreviousDate": "2021-01-20T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/01\/20\/daily_json.js",
  "Timestamp": "2021-01-20T14:00:00+03:00",
  "Valute": {
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.355,
          "Previous": 73.7243
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.1483,
          "Previous": 89.2064
      }
  }
}`;


let parsedJSON = JSON.parse(json),
aPrices = [...document.querySelectorAll('.price_cell')]; //Ищем все элементы по селектору .price_cell

aPrices.forEach(item => { //Выполняем функцию один раз для каждого элемента в массиве
item.dataset.originalPrice = item.textContent
});

function fReCalc(sValute, sChar) { //Задаем функцию , добавляем параметры, 
aPrices.forEach(item => {
  item.textContent = Math.ceil(parseFloat(item.dataset.originalPrice) / parseFloat(parsedJSON.Valute[sValute].Value)) + sChar //Делим значение в таблице на выбранный курс валюты, округляем вверх и добавляем значек валюты
});
}

document.querySelector('.usd').addEventListener('click', fReCalc.bind(this, 'USD', '$')); //Возвращаем элемент и регестрируем обработчик
document.querySelector('.eur').addEventListener('click', fReCalc.bind(this, 'EUR', '€'));
