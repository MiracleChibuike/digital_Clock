// Store hour Element
let hours_EL = document.getElementById("hours");
// Store minutes_Element
let minutes_El = document.getElementById("Minutes");
// Store seconds Elements
let seconds_El = document.getElementById("seconds");

let Am_Pm = document.getElementById("AM_PM");

let time_Determine = "AM";

let day_Month_year = document.getElementById("day_Month_year");

const updateTime = () => {
  let current_Date = new Date();

  let current_Hour = current_Date.getHours();
  let current_Minutes = current_Date.getMinutes();
  let current_seconds = current_Date.getSeconds();

  let current_date = current_Date.getDate();
  let current_Month = current_Date.getMonth() + 1;
  let current_Year = current_Date.getFullYear();
  if (current_Hour > 12) {
    time_Determine = "PM";
    Am_Pm.textContent = time_Determine;
  }

  // current_Hour = current_Hour < 10 ? + "0" : current_Hour :current_Hour

  hours_EL.textContent = current_Hour;
  minutes_El.textContent = current_Minutes;
  seconds_El.textContent = current_seconds;

  day_Month_year.textContent = `${current_date}/${current_Month}/${current_Year}`;
  day_Month_year.style.textAlign = "center"
  day_Month_year.style.color = "#f1f1f1";
  day_Month_year.style.margin = "25px 0";
  day_Month_year.style.fontSize = "1.5rem"


  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();
