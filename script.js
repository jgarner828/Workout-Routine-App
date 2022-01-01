let routineRETURN = JSON.parse(localStorage.getItem('program'));
if (!routineRETURN) {
    routineRETURN = []
}

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
// When user clicks submit in the program options menu..
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
// main screen button user clicks on Add Exercise...
$('.exerciseBtn').click( () => {
    $('.addExerciseContainer').removeClass('visually-hidden');
    $('.displayWeek').addClass('visually-hidden');
    $('.programOptionsContainer').addClass('visually-hidden');
})


// 
// When user clicks on the remove exercise button
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
// When user clicks submit in the exercise form   
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

 
        if(exercise.name === '') {
            console.log('need valid name');
        } else {
            routineRETURN.push(exercise);
        } 
        


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
//  When user clicks the save program button
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
// Displays the exercises in week
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



