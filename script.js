// Selecting all the elements.
var timeNowEl = document.querySelector('#currentDay');
var timeBlockEl = document.querySelector('.time-block');
var timeContainer = document.querySelector("#time-container");
var saveBtnEl = document.querySelector("button");
var textareaEl = document.querySelectorAll("textarea");

// Shows day, month, year
var timeNow = setInterval(function() {
  var dayMonthYear = dayjs().format('dddd, MMMM D, YYYY');
  timeNowEl.textContent = dayMonthYear;
}, 1000);

// Shows boxes separated by 1 hour
var timeHour = dayjs().hour();
// var i is the number hour in the day, j is the number slot in the calendar. 
// This goes through to make whichever slot the correct color if it is equal, ahead, or behind in the day.
for (var i = 9, j = 0; i < 18; i++, j++) {
  if (timeHour === i) {
    timeBlockEl[i].children[1].setAttribute("class", "description present");        
  }
  else if (timeHour < i) {
    timeBlockEl[i].children[1].setAttribute("class", "description future");        
  }
  else {
    timeBlockEl[i].children[1].setAttribute("class", "description past");        
  }
}

//click event when the user goes to enter an event.
timeContainer.addEventListener("click", (event) => {
  target = event.target;

 
  if (target == target.parentElement.children[2]) {
    console.log(target.parentElement.children[1].value);
    localStorage.setItem(
      target.parentElement.children[0].textContent,
      target.parentElement.children[1].value
    );

    // if user clicks the save button icon, text and time is saved in localstorage
  } else if (target.tagName == "I") {
    console.log(target.parentElement.parentElement.children[1].value);
    localStorage.setItem(
      target.parentElement.parentElement.children[0].textContent,
      target.parentElement.parentElement.children[1].value
    );
  } else return;
});

// Saves the values in the slots to the local storage
textareaEl[0].textContent = localStorage.getItem("9AM");
textareaEl[1].textContent = localStorage.getItem("10AM");
textareaEl[2].textContent = localStorage.getItem("11AM");
textareaEl[3].textContent = localStorage.getItem("12PM");
textareaEl[4].textContent = localStorage.getItem("1PM");
textareaEl[5].textContent = localStorage.getItem("2PM");
textareaEl[6].textContent = localStorage.getItem("3PM");
textareaEl[7].textContent = localStorage.getItem("4PM");
textareaEl[8].textContent = localStorage.getItem("5PM");