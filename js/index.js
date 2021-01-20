let json = `{
    "Date": "2021-01-21T11:30:00+03:00",
    "PreviousDate": "2021-01-20T11:30:00+03:00",
    "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/01\/20\/daily_json.js",
    "Timestamp": "2021-01-20T14:00:00+03:00",
    "Valute": {
        "AUD": {
            "ID": "R01010",
            "NumCode": "036",
            "CharCode": "AUD",
            "Nominal": 1,
            "Name": "Австралийский доллар",
            "Value": 56.7401,
            "Previous": 56.893
        },
        "AZN": {
            "ID": "R01020A",
            "NumCode": "944",
            "CharCode": "AZN",
            "Nominal": 1,
            "Name": "Азербайджанский манат",
            "Value": 43.1754,
            "Previous": 43.3928
        },
        "GBP": {
            "ID": "R01035",
            "NumCode": "826",
            "CharCode": "GBP",
            "Nominal": 1,
            "Name": "Фунт стерлингов Соединенного королевства",
            "Value": 100.2836,
            "Previous": 100.2282
        },
        "AMD": {
            "ID": "R01060",
            "NumCode": "051",
            "CharCode": "AMD",
            "Nominal": 100,
            "Name": "Армянских драмов",
            "Value": 14.0486,
            "Previous": 14.1183
        },
        "BYN": {
            "ID": "R01090B",
            "NumCode": "933",
            "CharCode": "BYN",
            "Nominal": 1,
            "Name": "Белорусский рубль",
            "Value": 28.9084,
            "Previous": 28.9274
        },
        "BGN": {
            "ID": "R01100",
            "NumCode": "975",
            "CharCode": "BGN",
            "Nominal": 1,
            "Name": "Болгарский лев",
            "Value": 45.5423,
            "Previous": 45.6667
        },
        "BRL": {
            "ID": "R01115",
            "NumCode": "986",
            "CharCode": "BRL",
            "Nominal": 1,
            "Name": "Бразильский реал",
            "Value": 13.6905,
            "Previous": 13.9202
        },
        "HUF": {
            "ID": "R01135",
            "NumCode": "348",
            "CharCode": "HUF",
            "Nominal": 100,
            "Name": "Венгерских форинтов",
            "Value": 24.9227,
            "Previous": 24.8611
        },
        "HKD": {
            "ID": "R01200",
            "NumCode": "344",
            "CharCode": "HKD",
            "Nominal": 10,
            "Name": "Гонконгских долларов",
            "Value": 94.6309,
            "Previous": 95.1024
        },
        "DKK": {
            "ID": "R01215",
            "NumCode": "208",
            "CharCode": "DKK",
            "Nominal": 1,
            "Name": "Датская крона",
            "Value": 11.9724,
            "Previous": 12.0078
        },
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
        },
        "INR": {
            "ID": "R01270",
            "NumCode": "356",
            "CharCode": "INR",
            "Nominal": 10,
            "Name": "Индийских рупий",
            "Value": 10.0392,
            "Previous": 10.0674
        },
        "KZT": {
            "ID": "R01335",
            "NumCode": "398",
            "CharCode": "KZT",
            "Nominal": 100,
            "Name": "Казахстанских тенге",
            "Value": 17.5272,
            "Previous": 17.558
        },
        "CAD": {
            "ID": "R01350",
            "NumCode": "124",
            "CharCode": "CAD",
            "Nominal": 1,
            "Name": "Канадский доллар",
            "Value": 57.778,
            "Previous": 57.9093
        },
        "KGS": {
            "ID": "R01370",
            "NumCode": "417",
            "CharCode": "KGS",
            "Nominal": 100,
            "Name": "Киргизских сомов",
            "Value": 86.4766,
            "Previous": 87.0417
        },
        "CNY": {
            "ID": "R01375",
            "NumCode": "156",
            "CharCode": "CNY",
            "Nominal": 1,
            "Name": "Китайский юань",
            "Value": 11.3416,
            "Previous": 11.3628
        },
        "MDL": {
            "ID": "R01500",
            "NumCode": "498",
            "CharCode": "MDL",
            "Nominal": 10,
            "Name": "Молдавских леев",
            "Value": 42.1338,
            "Previous": 42.5414
        },
        "NOK": {
            "ID": "R01535",
            "NumCode": "578",
            "CharCode": "NOK",
            "Nominal": 10,
            "Name": "Норвежских крон",
            "Value": 86.2391,
            "Previous": 86.2817
        },
        "PLN": {
            "ID": "R01565",
            "NumCode": "985",
            "CharCode": "PLN",
            "Nominal": 1,
            "Name": "Польский злотый",
            "Value": 19.6794,
            "Previous": 19.7071
        },
        "RON": {
            "ID": "R01585F",
            "NumCode": "946",
            "CharCode": "RON",
            "Nominal": 1,
            "Name": "Румынский лей",
            "Value": 18.273,
            "Previous": 18.3243
        },
        "XDR": {
            "ID": "R01589",
            "NumCode": "960",
            "CharCode": "XDR",
            "Nominal": 1,
            "Name": "СДР (специальные права заимствования)",
            "Value": 105.6239,
            "Previous": 106.1925
        },
        "SGD": {
            "ID": "R01625",
            "NumCode": "702",
            "CharCode": "SGD",
            "Nominal": 1,
            "Name": "Сингапурский доллар",
            "Value": 55.3247,
            "Previous": 55.4485
        },
        "TJS": {
            "ID": "R01670",
            "NumCode": "972",
            "CharCode": "TJS",
            "Nominal": 10,
            "Name": "Таджикских сомони",
            "Value": 64.3747,
            "Previous": 64.6988
        },
        "TRY": {
            "ID": "R01700J",
            "NumCode": "949",
            "CharCode": "TRY",
            "Nominal": 10,
            "Name": "Турецких лир",
            "Value": 98.52,
            "Previous": 98.7864
        },
        "TMT": {
            "ID": "R01710A",
            "NumCode": "934",
            "CharCode": "TMT",
            "Nominal": 1,
            "Name": "Новый туркменский манат",
            "Value": 20.9886,
            "Previous": 21.0942
        },
        "UZS": {
            "ID": "R01717",
            "NumCode": "860",
            "CharCode": "UZS",
            "Nominal": 10000,
            "Name": "Узбекских сумов",
            "Value": 69.8565,
            "Previous": 70.2082
        },
        "UAH": {
            "ID": "R01720",
            "NumCode": "980",
            "CharCode": "UAH",
            "Nominal": 10,
            "Name": "Украинских гривен",
            "Value": 26.054,
            "Previous": 26.1531
        },
        "CZK": {
            "ID": "R01760",
            "NumCode": "203",
            "CharCode": "CZK",
            "Nominal": 10,
            "Name": "Чешских крон",
            "Value": 34.098,
            "Previous": 34.1854
        },
        "SEK": {
            "ID": "R01770",
            "NumCode": "752",
            "CharCode": "SEK",
            "Nominal": 10,
            "Name": "Шведских крон",
            "Value": 87.8871,
            "Previous": 88.2081
        },
        "CHF": {
            "ID": "R01775",
            "NumCode": "756",
            "CharCode": "CHF",
            "Nominal": 1,
            "Name": "Швейцарский франк",
            "Value": 82.6628,
            "Previous": 82.9295
        },
        "ZAR": {
            "ID": "R01810",
            "NumCode": "710",
            "CharCode": "ZAR",
            "Nominal": 10,
            "Name": "Южноафриканских рэндов",
            "Value": 49.306,
            "Previous": 48.8674
        },
        "KRW": {
            "ID": "R01815",
            "NumCode": "410",
            "CharCode": "KRW",
            "Nominal": 1000,
            "Name": "Вон Республики Корея",
            "Value": 66.5995,
            "Previous": 66.8007
        },
        "JPY": {
            "ID": "R01820",
            "NumCode": "392",
            "CharCode": "JPY",
            "Nominal": 100,
            "Name": "Японских иен",
            "Value": 70.7002,
            "Previous": 70.8922
        }
    }
}`;


//$.getJSON('https://www.cbr-xml-daily.ru/daily_json.js'), function(data) {
//    
//});

let usdBtn = document.querySelector('.usd'),
    parsedJSON = JSON.parse(json);

usdBtn.addEventListener('click', ()=>{
  document.querySelectorAll('.price_cell').forEach(item=>{
    item.textContent = Math.ceil(item.textContent / parsedJSON.Valute.USD.Value) + "$";
  })
})


// https://www.w3schools.com/jquery/ajax_getjson.asp  jQuery getJSON() Method