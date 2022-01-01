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

    for(let i = 0; i < dailyROUTINE.length; i++){
        $('.dailyList').append(`<button class="btn btn-primary m-1" id= "daily_${dailyROUTINE[i].name}"> ${dailyROUTINE[i].name} </button>`);
        console.log(dailyROUTINE[i]);
    }
    
}