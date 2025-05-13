import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["S", "H", "D", "C"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];

    function getRandomCardURL() {
      const value = values[Math.floor(Math.random() * values.length)];
      const suit = suits[Math.floor(Math.random() * suits.length)];
      return `https://deckofcardsapi.com/static/img/${value}${suit}.png`;
    }

    document.getElementById("dealButton").addEventListener("click", () => {
      document.getElementById("cardImage").src = getRandomCardURL();
    });
  console.log();
};
