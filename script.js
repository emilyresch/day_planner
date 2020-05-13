
 
 //find today's date
 var dateFormat = "MMMM DD, YYYY";
 var todayDate = moment().format(dateFormat);
 console.log(todayDate);
 //get it on the jumbotron
 $("#currentDay").text(todayDate);

 //build page
 function buildCalendar() {
    var mainDiv = $(".container");
     for (var i = 9; i <= 17; i++) {
         //make a new row
         var newRow = $("<div>").attr("class", "row");
         //make 3 columns in the row, first: show hour block
         var hourColumn = $("<div>").attr("class", "hour col");
         //show hour 

         // and - need to determine if it's am or pm
         if ([i] < 12) {
             hourColumn.text([i] + "AM");
         } else {
             hourColumn.text([i] + "PM");
         }

         //second column: textarea (LOCALSTORAGE)
         var typeHere = $("<textarea>").attr("class", "time-block description col-9");
         typeHere.attr("data-hour", [i]);
         typeHere.attr("id", `textarea${[i]}`);

         //third column: button
         var button = $("<button>").attr("class", "saveBtn btn col");
         var icon = $("<i>").attr("class", "fa fa-save");

         mainDiv.append(newRow);
         newRow.append(hourColumn);
         newRow.append(typeHere);
         newRow.append(button);
         button.append(icon);

         //DETERMINE TIME OF DAY//////
         var timeFormat = "HH:mm";
         var currentTime = moment().format(timeFormat);
         console.log(currentTime);
         //DETERMINE COLOR OF DIV//////
         var thisHour = moment().hours();
         //if the current hour is the same as the hour in hourColumn,
         if (thisHour == [i]) {
             $(".description").attr("class", "col-9 present");
         } else if ([i] < thisHour) { //if it's before the current hour
             $(".description").attr("class", "col-9 past");
         } else { //if its after the current hour
             $(".description").attr("class", "col-9 future");
         }
     }
 }

 //load items from localstorage onto the page
 function addStoredItems() {
    for(i = 9 ; i < 18; i++){
        //grab value with keyname from localstorage
        var event = JSON.parse(localStorage.getItem(`textarea${[i]}`));
        //set the textarea's text to that value
        $(`#textarea${[i]}`).text(event);
    }
}


 function saveEvent (e) {
    e.preventDefault();
    //test unique button click
    console.log("I was clicked");
    console.log($(this).siblings('textarea').val().trim());

    //grab the id and the text of the specific textarea 
    var text = $(this).siblings('textarea').val().trim();
    var id = $(this).siblings('textarea').attr('id');

    //add them to local storage as a key-value pair 
    localStorage.setItem(id, JSON.stringify(text));

 }

 buildCalendar();
 addStoredItems();
 $('.saveBtn').on('click', saveEvent);


