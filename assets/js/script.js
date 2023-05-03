// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //formatting the time to just the H, so that the function can determine if the time block is past, present, or future. 
    //Multiple functions in this file will be constantly referncing this 'H' since we put it in a varaible called currentHour.
    //We will need to be checking the currentHour when deciding if we need to change the color of a block
    const currentHour = dayjs().format('H');
    console.log(currentHour);
    //after formatting the time to H, the function will change colors based on if "blockHour" (from the time-block class) is greater than, less than, or equal to the current hour. 
    function newColor(){
        $('.time-block').each(function(){
            const blockHour = parseInt(this.id);
            $(this).toggleClass('past', blockHour < currentHour); //'H' will register as "past" if the blockHour (time from HTML block) is less than dayjs currentHour
            $(this).toggleClass('present', blockHour == currentHour); //'H' will turn red if time block class is now equal to dayjs's currentHour
            $(this).toggleClass('future', blockHour > currentHour); //'H' will register as future if time block class is greater than dayjs's currentHour, turns green
        });
    }
    function userInput() { //this function will, once the user clicks the save button, the user input in the text area element will be saved to local storage
        $('.saveBtn').on('click', function() { 
            const key = $(this).parent().attr('id'); //"this" references the parent of the sav button, which is the correspondig number of the time block. So,
            // when save icon is clicked, its saved in the right time block
            const value = $(this).siblings('.description').val();//"this" references the user input that will fall into the description class
            localStorage.setItem(key, value);
            console.log(value);
        })
    }
    function changeColor () {
        $('.time-block').each(function() {
            const blockHour = parseInt(this.id);
            if (blockHour == currentHour) {
                $(this).removeClass('past future').addClass('present'); //if blockHour (from the HTML div id) is equal to the currentHour (which we grabbed from dayjs, then converted it to a simple H)
                //then we remove the color setting from the past and future class settings in css, and add the color setting from the css class in 'present'. In this case, red.
            } else if (blockHour < currentHour) {
                $(this).removeClass('future present').addClass('past');
            } else {//since blockHour is less than currentHour, we replace the future and present class settings, and add past setting, in this case, grey
                $(this).removeClass('past present').addClass('future');
                //makin it green!
            }
         });    
     }
     $('.time-block').each(function(){ //for "each" time block, this function uses the "key" which is the data that was saved from the click event.
        const key = $(this).attr('id');
        const value = localStorage.getItem(key); //pulling the data saved from the click event on a specifc time block and displaying that in the textarea element
        $(this).children('.description').val(value);
     });
     //realizing that i had my method of displaying the current date and time outside of the call that interacts with jQuery, so im going to try to put it here
     //and see if thats why my colors arent changing and why my time isnt updating by the second..I also had them in two separate functions, im going to put date and time in one function

     function updateClock (){
        const dateEl = $('#date');
        const timeEl = $('#time');
        const thisDay = dayjs().format('MMM DD, YYYY');
        const thisTime = dayjs().format('hh:mm:ss a');
        dateEl.text(thisDay);
        timeEl.text(thisTime);
     }
     //to set up the page, calling the functions..
     newColor();
     userInput();
     changeColor();

     setInterval(updateClock, 1000);
  });
  
