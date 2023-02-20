const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

var apiKey = "105spoMV+ejI+eJtMiyDSg==v1uooDVIMU6mI9q5";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const responce = await fetch(apiURL, options);
    const data = await responce.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again leter";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
  }
}

btnEl.addEventListener("click", getJoke);
