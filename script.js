// list of variables needed for program....

let name = '';
let programLength = 8;
let frequency = 3;
let exercises = [];


// looking for a mouse click on the New Program or Existing Program button....
 $('#newProgramBtn').click(newProgramBtn);
 $('#existingProgramBtn').click(existingProgramBtn);



// This is the function for a new program entirely.
function newProgramBtn() {

     console.log('starting a new program.');

     // hide the landing buttons and open a new form for program inputs...
     $('.landingBtn').addClass('d-none');

}


function existingProgramBtn() {
    console.log('running existing program....')
    $('.landingBtn').addClass('d-none');
}