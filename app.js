const adviceNumber = document.querySelector(".mainWindow_header");
const adviceDest = document.querySelector(".mainWindow_advice");
const apiUrl = "https://api.adviceslip.com/advice";
let advice = [];

window.addEventListener("load", adviceSet());
function adviceSet() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      advice.push({
        id: data.slip.id,
        advice: data.slip.advice,
      });
      function adviceSett() {
        adviceDest.innerHTML = '"' + advice[0].advice + '"';
        adviceNumber.innerHTML = "Advice #" + advice[0].id;
        advice.length = 0;
      }
      adviceSett();
    });
}
