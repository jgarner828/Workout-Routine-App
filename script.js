let routineRETURN = JSON.parse(localStorage.getItem('program'));

var userName, programLength;


displayProgram();


// 
// 
// Main screen button when you click on Program Details
$('.programDetails').click( () => {
    $('.programMainContainer').removeClass('visually-hidden');
    $('.programOptionsContainer').addClass('visually-hidden');
    $('.displayWeek').addClass('visually-hidden');
})


//
// When you click submit in the program options menu... runs the submitProgram function
$('.submitProgram').click( (event) => {
        event.preventDefault();
        userName = $('.userName').val();
        programLength = $('.programLength').val();


    $('.programMainContainer').addClass('visually-hidden');
    $('.programOptionsContainer').removeClass('visually-hidden');
    $('.displayWeek').removeClass('visually-hidden');

    console.log('Submitted userName as: ' + userName);
    console.log('Submitted programLength as: ' + programLength);

    $('.userName').val('');
    $('.programLength').val('');

})


// 
// main screen button you click on Add Exercise...
$('.exerciseBtn').click( () => {
    $('.addExerciseContainer').removeClass('visually-hidden');
    $('.displayWeek').addClass('visually-hidden');
    $('.programOptionsContainer').addClass('visually-hidden');
})


// 
// When you click on the remove exercise button
$('.removeExercise').click( () => {

    $('.removeList').empty();

    $('.removeExerciseContainer').removeClass('visually-hidden');
    $('.displayWeek').addClass('visually-hidden');
    $('.programOptionsContainer').addClass('visually-hidden');

    routineRETURN.forEach(element => {
        $('.removeList').append(`<button class="deleteBtn btn btn-primary m-1" id= "${element.name}"> ${element.name} </button>`); 
    });

    $('.removeList').append(`<button class="closeRemoveContainer btn btn-warning m-1"> Close </button>`); 

})


// 
// Generated delete exercise buttons. grab ID on clicked button and remove it from the array.
$(document).on('click', '.deleteBtn', (event) => {
    let removeExercise = event.target.id;

    for(let i = 0; i < routineRETURN.length; i++) {
        if(removeExercise === routineRETURN[i].name) {
            routineRETURN.splice(i, 1);
        }
    }

    $('.removeExerciseContainer').addClass('visually-hidden');
    $('.programOptionsContainer').removeClass('visually-hidden');
    $('.displayWeek').removeClass('visually-hidden');

    displayProgram();

})


// 
// Delete Exercise container close button
$(document).on('click', '.closeRemoveContainer', () => {
    $('.removeExerciseContainer').addClass('visually-hidden');
    $('.displayWeek').removeClass('visually-hidden');
    $('.programOptionsContainer').removeClass('visually-hidden');
})


//
// When you click submit in the exercise form   
// TODO: need to add error checking make sure the form is completely filled and not submitting empty values.
$('.submitExercise').click( (event) => {
         event.preventDefault();

        var exercise = {
            name: "",  // name of the exercise
            startWeight: 100,  // starting weight of the exercise
            reps: 5, // rep scheme.... 
            sets: 3, // how many times each lift is supposed to be performed
            increment: 10, // how many pounds to add each time object is called
            frequency: [false, false, false, false, false, false] // days which you train Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
        }
        
        // console.log('test of object: ');
        // console.log(exercise);

         exercise.name = $('.exerciseName').val();
         exercise.startWeight = $('.startWeight').val();
         exercise.reps = $('.programReps').val();
         exercise.sets = $('.programSets').val();
         exercise.increment = $('.programIncrement').val();
         exercise.frequency[0] = $('.SundayChk').is(':checked');
         exercise.frequency[1] = $('.MondayChk').is(':checked');
         exercise.frequency[2] = $('.TuesdayChk').is(':checked');
         exercise.frequency[3] = $('.WednesdayChk').is(':checked');
         exercise.frequency[4] = $('.ThursdayChk').is(':checked');
         exercise.frequency[5] = $('.FridayChk').is(':checked');
         exercise.frequency[6] = $('.SaturdayChk').is(':checked');
        
        routineRETURN.push(exercise);

        console.log('current routine array is');
        console.log(routineRETURN);

        $('.exerciseName').val('');
        $('.startWeight').val('');
        $('.programReps').val('');
        $('.programSets').val('');
        $('.programIncrement').val('');

        $('.SundayChk').prop('checked', false);
        $('.MondayChk').prop('checked', false);
        $('.TuesdayChk').prop('checked', false);
        $('.WednesdayChk').prop('checked', false);
        $('.ThursdayChk').prop('checked', false);
        $('.FridayChk').prop('checked', false);
        $('.SaturdayChk').prop('checked', false);


        $('.programMainContainer').addClass('visually-hidden');
        $('.addExerciseContainer').addClass('visually-hidden');
        $('.programOptionsContainer').removeClass('visually-hidden');
        $('.displayWeek').removeClass('visually-hidden');

        displayProgram();


             
})


// 
//  When you click the save program button
$('.saveProgram').click( () => {
    let routine = JSON.stringify(routineRETURN);

    let date = moment();
    date = date._d;

    localStorage.setItem('name', userName);
    localStorage.setItem('startDate', date);
    localStorage.setItem('program', routine);
    localStorage.setItem('programLength', programLength);

})




// 
// 
function displayProgram() {

    //clear the values so it starts with fresh list.
    $("ul").empty();
    
     for(let i = 0; i < routineRETURN.length; i++) {
        let exercise = routineRETURN[i];

        for(let j = 0; j < exercise.frequency.length; j++) {
            if(exercise.frequency[j]) $('#day-' + j).append(`<button class="btn btn-primary m-1" id= "${exercise.name}"> ${exercise.name} </button>`);
        }
    }
} 







/* methods outline .....


1. If there is no existing user create a user and program (2A) Otherwise skip to start program. (2B)

2A. Create a user. Create a program. Start with how many weeks you want to run the program. set the program based on length with the calendar   
    Allow user to add a new exercise object with all training data necessary. Allow list items to get moved in priority ranking. When user is satisfied, allow user to create program.

2B. Load program based on day. (Possibly use moment.js?) The program checks which objects to call based on frequency (boolean value) and call them into a daily exercise array. App runs through each exercise in array allowing the user to log their actual results. If total reps is less than reps*sets value then decrease by increment and save. If total reps is more than sets*reps then increase by increment and save.

3A. When program reaches end. Allow user to save objects as starting weight for new program or a reset. 

Possible options...

        - Let the user edit the program at any time.
        - Track and save the total tonnage results so user can visually see progress in graph form.

*/