// current day is displayed at top of calendar
// timeblocks for 9-5 are omnipresent
// timeblock is color coded: grey-past, red-present, green-future
// timeblocks are forms that allow the user to write text on them
// each timeblock has a save button on the right side that stores the form data into localStorage

/*
USE CASES:
    1) User adds text to timeblock
        a) user clicks the save button for that timeblock, expecting the content to be there next time the page is loaded
    2) user removes text from timeblock
        b) user clicks the save button for that timeblock, expecting the content removed to NOT be there next time the page is loaded
*/

// VARIABLEs

// current day
var today = $('#currentDay');
// set text of today to the current day and time
today.text(moment().format("[Today is] dddd[!] [the time is] h[:]mma"));
var currentHour = moment().format('ha')


// timeblocks
var timeblock;
var timeblockTime = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// text form
var todoForm;
// save button
var saveBtn = $(".saveBtn");
// local storage
var storedTodos = JSON.parse(localStorage.getItem('Todo')) || [];
// current text of text area to be saved to local storage
var todo;

// FUNCTIONS
// function to populate the time blocks
function timeblockPopulator() {
    // for each hour between 9 and 5,
    for (let i = 0; i < timeblockTime.length; i++) {
        // timeblock now holds a new div
        timeblock = $("<timeblock>");
        // add appropriate classes to timeblock
        timeblock.addClass('time-block row hour description');
        // add appropriate text to timeblock
        timeblock.text(timeblockTime[i]);
        // create an input form for each timeblock
        todoForm = $("<textarea>").addClass("future textarea").attr('type', 'text textarea');
        // save button 
        saveBtn = $("<button>").addClass('saveBtn i');
        // append timeblock to the container div
        $('.container').append(timeblock);
        // add the form to the timeblock
        timeblock.append(todoForm);
        // add save button
        timeblock.append(saveBtn);
    };
    // set id for each textarea to time-[i]
    $('textarea').each(function (i) {
        $(this).attr('id', 'time-' + [i]);
    });
};

timeblockPopulator();

// color change of timeblock depending on time of day
// for each block...
// default time to future.
// if time is present, remove future class
// add present class
if (currentHour == '9am') {
    $('#time-0').removeClass("future").addClass("present");
} if (currentHour == '10am') {
    $('#time-1').removeClass("future").addClass("present");
} if (currentHour == '11am') {
    $('#time-2').removeClass("future").addClass("present");
} if (currentHour == '12pm') {
    $('#time-3').removeClass("future").addClass("present");
} if (currentHour == '1pm') {
    $('#time-4').removeClass("future").addClass("present");
} if (currentHour == '2pm') {
    $('#time-5').removeClass("future").addClass("present");
} if (currentHour == '3pm') {
    $('#time-6').removeClass("future").addClass("present");
} if (currentHour == '4pm') {
    $('#time-7').removeClass("future").addClass("present");
} if (currentHour == '5pm') {
    $('#time-8').removeClass("future").addClass("present");
};

// if time is past, add remove present class
// add past class
if (currentHour > '9am' || currentHour < '9am') {
    $('#time-0').removeClass("future").addClass("past");
} if (currentHour > '10am' || currentHour < '10am') {
    $('#time-1').removeClass("future").addClass("past");
} if (currentHour > '11am' || currentHour < '11am') {
    $('#time-2').removeClass("future").addClass("past");
} if (currentHour > '12pm' || currentHour < '12pm') {
    $('#time-3').removeClass("future").addClass("past");
} if (currentHour > '1pm' || currentHour < '1pm') {
    $('#time-4').removeClass("future").addClass("past");
} if (currentHour > '2pm' || currentHour < '2pm') {
    $('#time-5').removeClass("future").addClass("past");
} if (currentHour > '3pm' || currentHour < '3pm') {
    $('#time-6').removeClass("future").addClass("past");
} if (currentHour > '4pm' || currentHour < '4pm') {
    $('#time-7').removeClass("future").addClass("past");
} if (currentHour > '5pm' || currentHour < '5pm') {
    $('#time-8').removeClass("future").addClass("past");
};

// EVENT LISTENERS
// Save button on click
$(".saveBtn").on('click', function () {
    // get the text of the box next to the save button clicked
    // select the textarea closest to the save button clicked
    var todo = $(this).prev('textarea').val();
    // set up our localstorage object
    var object = {
        todo: todo
    };
    // push object into storedTodos array
    storedTodos.push(object)
    // when the button is pressed, save the data from the input box/form to local storage
    localStorage.setItem('Todo', JSON.stringify(storedTodos));
});

// stack overflow solution (can't get it to work here)
// $('textarea[type="text"]').each(function(){    
//     var id = $(this).attr('id');
//     var value = $(this).val();
//    localStorage.setItem(id, JSON.stringify(value));

// });   

// $('textarea[type="textarea"]').each(function(){    
//     var id = $(this).attr('id');
//     var value = JSON.parse(localStorage.getItem(id));

//     // $(this).val(value);

// });


// on page load
// set text of textarea to the locally stored todo
$(document).ready(function () {
  

});
