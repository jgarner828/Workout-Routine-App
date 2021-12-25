const routineArray = [] ; // this is the array that stores your list of exercises. this needs to be saved in localstorage when you save the workout routine
var routineLocal = localStorage.getItem('routine');

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
        var userName = $('.userName').val();
        var programLength = $('.programLength').val();


    $('.programMainContainer').addClass('visually-hidden');
    $('.programOptionsContainer').removeClass('visually-hidden');
    $('.displayWeek').removeClass('visually-hidden');

    console.log('Submitted userName as: ' + userName);
    console.log('Submitted programLength as: ' + programLength);

    return userName, programLength;
})


// main screen button you click on Add Exercise...
$('.exerciseBtn').click( () => {
    $('.addExerciseContainer').removeClass('visually-hidden');
    $('.displayWeek').addClass('visually-hidden');
    $('.programOptionsContainer').addClass('visually-hidden');
})


//
//
// When you click submit in the exercise form
$('.submitExercise').click( (event) => {
        // event.preventDefault();

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
        
        routineArray.push(exercise);

        console.log('current routine array is');
        console.log(routineArray);

        $('.programMainContainer').addClass('visually-hidden');
        $('.addExerciseContainer').addClass('visually-hidden');
        $('.programOptionsContainer').removeClass('visually-hidden');
        $('.displayWeek').removeClass('visually-hidden');

        

             
})


$('.saveProgram').click( () => {
    let routine = JSON.stringify(routineArray);

    let date = moment();
    date = date._d;

    localStorage.setItem('name', userName);
    localStorage.setItem('startDate', date);
    localStorage.setItem('program', routine);
    localStorage.setItem('programLength', programLength);

})





let routineRETURN = JSON.parse(localStorage.getItem('program'));
console.log(routineRETURN);







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