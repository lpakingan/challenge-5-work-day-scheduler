// function runs on initial page load in
$(function () {

  // uses dayjs to find the current date/time and writes it to the scheduler page
  $('#currentDay').text(dayjs().format('[Today is ] dddd, MMMM DD[th.]'));

  function currentTime() {
    var time = dayjs().format('[The time right now is] hh:mm:ss a[.]');
    $('#currentTime').text(time);
  }

  // setInterval allows for dynamic showing of the current time
  currentTime();
  setInterval(currentTime, 1000);
  
  // sets the time-block variable (where all the timeblocks are children of) and logs the current hour
  var timeblockEl = $('.time-block');
  currentHour24 = dayjs().format('H');
  currentHour = parseInt(currentHour24);
  currentHour12 = dayjs().format('hA')
  console.log(`The current hour is ${currentHour12} in 12hr or ${currentHour24} in 24hr time formats`);

  // for each hourly time-block, the timeblock's hour is sliced and compared to the current hour
  $.each(timeblockEl, function () {
    var timeblockID = $(this).attr('id');
    var timeblockHour = timeblockID.slice(5);

  // if the timeblock hour is less than the current hour, adds the class 'past'
  if (timeblockHour < currentHour) {
    $(this).addClass('past');
    // $(this).removeClass('present');
    // $(this).removeClass('future');
    //if the timeblock hour is equal to the current hour, adds the class 'present'
  } else if (timeblockHour == currentHour) {
    // $(this).removeClass('past');
    $(this).addClass('present');
    // $(this).removeClass('future');
    // if the timeblock hour is greater than the current hour, adds the class 'future'
  } else {
    // $(this).removeClass('past');
    // $(this).removeClass('present');
    $(this).addClass('future');
  }});

  // gives functionality to the save button by using the 'this' variable to store the timeblockID and user input
  // if the user input is empty the user is alerted they need to input again
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

  // gets the locally stored inputs and sets the value of the corresponding ID's description as the user input
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
});

