

// list of variables needed for program....

let name = '';   // user name 
let programLength = 8;  // how many weeks the program will run. default is 8 weeks
let programExercises = []; // array holding all of the exercise objects in the program.


// need to look at calendar libraries and saving the dates
// 
// 


// sample exercise object.... 
let exercise = {
    name: "exercise name",  // name of the exercise
    startWeight: 0,  // starting weight of the exercise
    reps: 4, // rep scheme.... default is 5.
    sets: 3, // how many times each lift is supposed to be performed
    increment: 5, // how many pounds to add each time object is called
    frequency: [false, false, false, false, false, false, false] // days which you train Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}



$("#myModal").modal()

$('.close').click(function() {
    $( "#myModal" ).hide();
});






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