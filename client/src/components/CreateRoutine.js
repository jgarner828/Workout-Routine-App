import React from "react";
import { StyledRoutine } from "./styles/CreateRoutine.styled";
import Schedule from "./Schedule";
import AddExercise from "./AddExercise";

import { useState } from "react";

export default function CreateRoutine({user}) {

    console.log(user)


    const [selectorButton, changeSelectorButton] = useState(false)


    function changeView() {
        selectorButton
            ?
            changeSelectorButton(false)
            :
            changeSelectorButton(true);

    }


    return (
        <StyledRoutine>

            {
            selectorButton 
            ? 
            (<AddExercise />)
            :
            (<Schedule />)
            }

        <button onClick={changeView}>Switch between schedule and add exercise</button>



        </StyledRoutine>
    )
}