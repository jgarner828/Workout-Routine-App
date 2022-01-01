let dailyROUTINE = JSON.parse(localStorage.getItem('program'));

if(!dailyROUTINE) {
    $('.main').append(`<h1>You need a routine first!</h1>`);
} else {
    displayDaily();
}

function displayDaily() {

    // TODO: NEED TO IMPORT MOMENT TO CHECK DAY. CHANGE DAY TO AN INDEX EQUIVALENT VALUE; THEN FILTER THROUGH EACH index of dailyROUTINE TO SEE WHICH TO DISPLAY ACCORDING TO BOOLEAN CHECK
    let today = moment();
    console.log(today._d);

    // Sun = 0
    // Mon = 1
    // Tue = 2
    // Wed = 3
    // Thu = 4
    // Fri = 5
    // Sat = 6
    var j = 6;


// Loops through array checking boolean value of current day vs each exercise to make button
    for(let i = 0; i < dailyROUTINE.length; i++){
        console.log(dailyROUTINE[i]);
         if(dailyROUTINE[i].frequency[j]) {
            $('.dailyList').append(`<button class="btn btn-primary m-1" id= "daily_${dailyROUTINE[i].name}"> ${dailyROUTINE[i].name} </button>`);
         }
    }
    
}