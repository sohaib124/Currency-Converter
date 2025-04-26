let currencydrop = document.getElementById("currencydrop");
let currencydrop2 = document.getElementById("currencyTo");
let convertBtn = document.getElementById("convertBtn");
let inputValue = document.getElementById("inputValue");
let outputValue = document.getElementById("outputValue");

const getresponse = async () => {
  let countrydata = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/country.json");
  let countryresponse = await countrydata.json();
  for (let data in countryresponse) {
    let currencyname_res = countryresponse[data]["currency_code"];
    currencydrop.innerHTML += `<option value="${currencyname_res}">${currencyname_res}</option>`;
    currencydrop2.innerHTML += `<option value="${currencyname_res}">${currencyname_res}</option>`;
  }
};
getresponse();

async function convertcurrency() {
  let currency1 = currencydrop.value
  let currency2 = currencydrop2.value
  let amount = inputValue.value
  let datafetch =  await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency1}.json`)
  let response = await datafetch.json()
  let finaldata = response [currency1][currency2]
  let result = amount * finaldata
  console.log(`${amount} ${currency1.toUpperCase()} = ${result.toFixed(2)} ${currency2.toUpperCase()}`);
  outputValue.value = `${result.toFixed(2)}`;
};

function exchangerate(){
    location = "exchangerate.html"
}