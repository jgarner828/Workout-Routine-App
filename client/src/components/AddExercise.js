import React, { useState } from 'react';


export default function AddExercise(props) {
  const [formState, setFormState] = useState({
                                            exercise: '',
                                            startingWeight: 0,
                                            sets: 0,
                                            reps: 0,
                                            increment: 0,
                                            days: [false, false, false, false, false, false, false]
                                            });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formState)
    // const mutationResponse = await addExercise({
    //   variables: {
    //     exercise: formState.exercise,
    //     startingWeight: formState.startingWeight,
    //     sets: formState.sets,
    //     reps: formState.reps,
    //     increment: formState.increment,
    //     days: formState.days
    //   },
    // });

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="exercise">Exercise:</label>
          <input
            name="exercise"
            type="text"
            id="exercise"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="startingWeight">Starting Weight:</label>
          <input
            placeholder="0"
            name="startingWeight"
            type="number"
            id="startingWeight"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="sets">Sets:</label>
          <input
            placeholder='5'
            name="sets"
            type="number"
            id="sets"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="reps">Reps:</label>
          <input
            placeholder="3"
            name="reps"
            type="number"
            id="reps"
            onChange={handleChange}
          />
        </div>

        <div class='weeksBoxes w-100 d-flex flex-row'>
                <div class="mb-3 form-check">
                <input type="checkbox" id="SundayChk" />
                <label class="form-check-label" for="SundayChk">Sunday</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class=" MondayChk form-check-input" id="MondayChk"/>
                    <label class="form-check-label" for="MondayChk">Monday</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="TuesdayChk form-check-input" id="TuesdayChk"/>
                    <label class="form-check-label" for="TuesdayChk">Tuesday</label>
                </div>
                <div class="mb-3 form-check ">
                    <input type="checkbox" class="WednesdayChk form-check-input" id="WednesdayChk"/>
                    <label class="form-check-label" for="WednesdayChk">Wednesday</label>
                </div>
                <div class="mb-3 form-check ">
                    <input type="checkbox" class="ThursdayChk form-check-input" id="ThursdayChk"/>
                    <label class="form-check-label" for="ThursdayChk">Thursday</label>
                </div>
                <div class="mb-3 form-check ">
                    <input type="checkbox" class="FridayChk form-check-input" id="FridayChk"/>
                    <label class="form-check-label" for="FridayChk">Friday</label>
                </div>
                <div class="mb-3 form-check ">
                    <input type="checkbox" class="SaturdayChk form-check-input" id="SaturdayChk"/>
                    <label class="form-check-label" for="SaturdayChk">Saturday</label>
                </div>
            </div>

        <div className="flex-row flex-end">
          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
  );
}
