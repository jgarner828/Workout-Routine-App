import React from "react";
import DailyExercises from './DailyExercises'

export default function Schedule() {


    return(
         <ul>
        <DailyExercises day='Sunday' />
        <DailyExercises day='Monday' />
        <DailyExercises day='Tuesday' />
        <DailyExercises day='Wednesday' />
        <DailyExercises day='Thursday' />
        <DailyExercises day='Friday' />
        <DailyExercises day='Saturday' />
        </ul>
    )
}