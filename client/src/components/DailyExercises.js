import React from 'react';

import { StyledDailyExercises } from './styles/StyledDailyExercises.styled';



export default function DailyExercises({day}) {


    return (
        <StyledDailyExercises>
                <>{day}</>
        </StyledDailyExercises>)
}
