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

// VARIABLES

// current day
var today = $('#currentDay');
today.text(moment().format("[Today is] dddd[!]"));  

// timeblocks

//


// FUNCTIONS
// (I dont think we need any explicit functions. we'll handle them in the EVENT LISTENERS)
// maybe we need a function to populate the time blocks
    function timeblockPopulator() {
        // for each hour between 9 and 5,
        // create an element with the appropriate classes...
        // ... and append them to div.container.
    }



// EVENT LISTENERS
// Save button on click
    // when the button is pressed, save the data from the input box/form to local storage

// color change of timeblock depending on time of day
    // for each block...
    // default time to future.
    // if time is present, add remove future class
        // add present class
    // if time is past, add remove present class
        // add past class
    


// ????