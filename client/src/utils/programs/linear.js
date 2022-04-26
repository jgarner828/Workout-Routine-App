

// 
// sample exercise data
let dataset = [
    {
        currentWeight: 100,
        increment: 10,
    },
    {
        currentWeight: 100,
        increment: 5,
    },
    {
        currentWeight: 100,
        increment: 1000,
    },
]


// 
// This function returns an array of objects with a new key of dailyGoal to be rendered in client workout view
// 
export default function linear(exercises) {

    // this function will take in an array of exercises with their currentWeight and return to the user an array of values to be used that daily session. 
    
    // if array empty t
    if(!exercises) {
        return console.log('the length of the exercise array is zero.');
    }

    console.log('inside linear function')
    console.log(exercises)


    let dailyWeights = exercises.map((exercise) => {
        exercise.dailyGoal = exercise.currentWeight + exercise.increment;
        return exercise;
    })

    console.log(dailyWeights)

    return dailyWeights;

}

