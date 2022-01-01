let dailyROUTINE = JSON.parse(localStorage.getItem('program'));

if(!dailyROUTINE) {
    $('.main').append(`<h1>You need a routine first!</h1>`);
} else {
    displayDaily();
}

function displayDaily() {

    // checking current day of week and setting j to the appropriate index for displaying exercises
    let today = moment();
    let todayStr = today._d;
    let todayIndex = todayStr.toString().split(" ");
    
    const checkVal = todayIndex[0];
    var j;

    switch(checkVal){
        case 'Sun':
            var j = 0;
            break;
        case 'Mon':
            var j = 1;
            break;
        case 'Tue':
            var j = 2;
            break;
        case 'Wed':
            var j = 3;
            break;
        case 'Thu':
            var j = 4;
            break;
        case 'Fri':
            var j = 5;
            break;
        case 'Sat':
            var j = 6;
            break;
    }



// Loops through array checking boolean value of current day vs each exercise to make button
    for(let i = 0; i < dailyROUTINE.length; i++){
        console.log(dailyROUTINE[i]);
         if(dailyROUTINE[i].frequency[j]) {
            $('.dailyList').append(`<button class="btn btn-primary m-1" id= "daily_${dailyROUTINE[i].name}"> ${dailyROUTINE[i].name} </button>`);
         }
    }
    
}