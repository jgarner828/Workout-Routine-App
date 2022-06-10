import React from "react";
import { StyledRoutine } from "./styles/CreateRoutine.styled";
import DailyExercises  from "./DailyExercises"
import AddExercise from "./AddExercise";

export default function CreateRoutine({user}) {


    const addExercise = (event) => {
        console.log(event)
    }


    // console.log(user)
    return (
        <StyledRoutine>
            <h2>Create your routine {user.firstName}</h2>
            <ul>
                <DailyExercises day='Sunday' />
                <DailyExercises day='Monday' />
                <DailyExercises day='Tuesday' />
                <DailyExercises day='Wednesday' />
                <DailyExercises day='Thursday' />
                <DailyExercises day='Friday' />
                <DailyExercises day='Saturday' />
            </ul>
            <AddExercise />
            <button onClick={addExercise}>add exercise</button>
        </StyledRoutine>
    )
}