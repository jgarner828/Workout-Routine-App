let dailyROUTINE = JSON.parse(localStorage.getItem('program'));

if(!dailyROUTINE) {
    $('.main').append(`<h1>You need a routine first!</h1>`);
} else {
    displayDaily();
}

function displayDaily() {

    let today = moment();
    let todayStr = today._d;
    let todayIndex = todayStr.toString().split(" ");
    
    const checkVal = todayIndex[0];
    var j;

    if (checkVal === 'Sun') { 
        var j = 0;
    }
    if (checkVal === 'Mon') { 
        var j = 1;
    }
    if (checkVal === 'Tue') { 
        var j = 2;
    }
    if (checkVal === 'Wed') { 
        var j = 3;
    }
    if (checkVal === 'Thu') { 
        var j = 4;
    }
    if (checkVal === 'Fri') { 
        var j = 5;
    }
    if (checkVal === 'Sat') { 
        var j = 6;
    }


// Loops through array checking boolean value of current day vs each exercise to make button
    for(let i = 0; i < dailyROUTINE.length; i++){
        console.log(dailyROUTINE[i]);
         if(dailyROUTINE[i].frequency[j]) {
            $('.dailyList').append(`<button class="btn btn-primary m-1" id= "daily_${dailyROUTINE[i].name}"> ${dailyROUTINE[i].name} </button>`);
         }
    }
    
}