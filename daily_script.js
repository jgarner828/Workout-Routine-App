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
         if(dailyROUTINE[i].frequency[j]) {
            $('.dailyList').append(`<button class="btn btn-primary m-1 daily" id= "${dailyROUTINE[i].name}"> ${dailyROUTINE[i].name} </button>`);
         }
    }
    
}

function openDailyExercise(exercise) {

    // search through the daily exercise to find the matching object 
    let match = dailyROUTINE.filter( (array) => array.name === `${exercise.id}` );
    console.log(match);

    $('.dailyExercise').removeClass('visually-hidden');

    let reps = parseInt(`${match[0].reps}`);
    console.log('reps: ' + reps);

    let sets = parseInt(`${match[0].sets}`);
    console.log('sets: ' + sets);

    let increment = parseInt(`${match[0].increment}`);
    console.log('increment: ' + increment);

    let startWeight = parseInt(`${match[0].startWeight}`);
    console.log('startWeight: ' + startWeight);

    let completeForm = '';

    for(let i = 1; i < sets + 1; i++) {
        let formItem = `<form>
        <div class="form-group">
        <label for="formGroupExampleInput">Set ${i}</label>
        <input type="text" class="form-control" id="set_${[i]}" placeholder="${startWeight} lbs for ${reps} reps.">
        </div>`;

        console.log(`Looped through set_${[i]}`)
        completeForm += formItem;
    }    
    
    exerciseForm(match, completeForm);

}

// Create exercise form to be parsed in HTML
function exerciseForm(match, form) {
    $('.currentExercise').append(`<h1>${match[0].name}</h1> ${form}<button class ='close saveDay'>Save</button>`);
}


// When you click save on daily exercise form.
function saveDailyResults(event) {
        console.log(event);
}


// When user clicks on the daily exercise
$(document).on('click', '.daily', (event) => {
    let id = event.target;
    $('.currentExercise').empty();
    openDailyExercise(id)
})

// When user clicks save on daily exercise form
$(document).on('click', '.saveDay', (event) => {
    event.preventDefault();
    saveDailyResults(event);
    $('.dailyExercise').addClass('visually-hidden');
})