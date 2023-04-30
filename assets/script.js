// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function() {
    var hourID = $(this).parent().attr('id');
    var userInput = $(this).parent().children().eq(1).val();
    localStorage.setItem(hourID, userInput)
    
    console.log(hourID, userInput)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeblockEl = $('.time-block');
  currentHour24 = dayjs().format('H');
  currentHour = parseInt(currentHour24);
  currentHour12 = dayjs().format('hA')
  console.log(`The current hour is ${currentHour12} in 12hr or ${currentHour24} in 24hr time formats`);

  $.each(timeblockEl, function () {
    var timeblockID = $(this).attr('id');
    var timeblockHour = timeblockID.slice(5);
    // console.log(timeblockHour);

  // removeClass not needed?
  if (timeblockHour < currentHour) {
    $(this).addClass('past');
    // $(this).removeClass('present');
    // $(this).removeClass('future');
  } else if (timeblockHour == currentHour) {
    // $(this).removeClass('past');
    $(this).addClass('present');
    // $(this).removeClass('future');
  } else {
    // $(this).removeClass('past');
    // $(this).removeClass('present');
    $(this).addClass('future');
  }});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM DD[th]'))
});
