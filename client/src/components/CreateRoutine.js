import React from "react";
import { StyledRoutine } from "./styles/CreateRoutine.styled";

import DailyExercises  from "./DailyExercises"

export default function CreateRoutine({user}) {


    console.log(user)
    return (
        <StyledRoutine>
            <h1>Create your routine {user.firstName}</h1>
            <ul>
                <DailyExercises day='Sunday' />
                <DailyExercises day='Monday' />
                <DailyExercises day='Tuesday' />
                <DailyExercises day='Wednesday' />
                <DailyExercises day='Thursday' />
                <DailyExercises day='Friday' />
                <DailyExercises day='Saturday' />
            </ul>
            <button>add exercise</button>
        </StyledRoutine>
    )
}