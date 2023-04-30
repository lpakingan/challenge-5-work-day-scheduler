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
    var userInput = $(this).parent().children().eq(1).val().trim();
    if (userInput == null || userInput == '') {
      alert('You must enter valid input!');
      console.log(hourID, userInput);
    } else {
      localStorage.setItem(hourID, userInput);
      console.log(hourID, userInput)};
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
  hour8Input = localStorage.getItem('hour-8');
  $('#hour-8 .description').val(hour8Input);
  hour9Input = localStorage.getItem('hour-9');
  $('#hour-9 .description').val(hour9Input);
  hour10Input = localStorage.getItem('hour-10');
  $('#hour-10 .description').val(hour10Input);
  hour11Input = localStorage.getItem('hour-11');
  $('#hour-11 .description').val(hour11Input);
  hour12Input = localStorage.getItem('hour-12');
  $('#hour-12 .description').val(hour12Input);
  hour13Input = localStorage.getItem('hour-13');
  $('#hour-13 .description').val(hour13Input);
  hour14Input = localStorage.getItem('hour-14');
  $('#hour-14 .description').val(hour14Input);
  hour15Input = localStorage.getItem('hour-15');
  $('#hour-15 .description').val(hour15Input);
  hour16Input = localStorage.getItem('hour-16');
  $('#hour-16 .description').val(hour16Input);
  hour17Input = localStorage.getItem('hour-17');
  $('#hour-17 .description').val(hour17Input);

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('[Today is ] dddd, MMMM DD[th.]'));

  function currentTime() {
    var time = dayjs().format('[The time right now is] hh:mm:ss a[.]');
    $('#currentTime').text(time);
  }

  currentTime();
  setInterval(currentTime, 1000);
});
