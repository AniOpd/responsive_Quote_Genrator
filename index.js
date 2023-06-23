const btnEL = document.getElementById("btn");
const QuoteEl = document.getElementById("Quote");
const apiKey = "uAJ/7lJd5V29f30b13fgFQ==ca4qGFlLdORVxLWA";

const option = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};
var category = "life";
const apiURL = "https://api.api-ninjas.com/v1/quotes?category=" + category;

async function getQuote() {
  try {
    QuoteEl.innerText = "udating.....";
    btnEL.disabled = true;
    btnEL.innerText = "loading....";
    const response = await fetch(apiURL, option);
    const data = await response.json();
    btnEL.disabled = false;
    btnEL.innerText = "Tell me the Quote";

    QuoteEl.innerText = data[0].quote;
  } catch (error) {
    QuoteEl.innerText = "please try again later";
    btnEL.disabled = false;
    btnEL.innerText = "Tell me the Quote";
  }
}

btnEL.addEventListener("click", getQuote);
