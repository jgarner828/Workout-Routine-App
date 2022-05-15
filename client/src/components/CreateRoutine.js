import React from "react";

import { StyledRoutine } from "./styles/CreateRoutine.styled";

export default function CreateRoutine({user}) {


    console.log(user)
    return (
        <StyledRoutine>
            <h1>Hey {user.firstName}</h1>
        </StyledRoutine>
    )
}