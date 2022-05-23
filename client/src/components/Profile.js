import React from 'react';

import { useQuery } from '@apollo/client';

import { StyledProfile } from './styles/Profile.styled';

import CreateRoutine from './CreateRoutine'

import {QUERY_ME} from '../utils/queries'

export default function Profile() {

    const { loading, data } = useQuery(QUERY_ME);

    let routine = false;


    if (loading) {
        return <h2>LOADING...</h2>;
      }

    // console.log(data.me)

    return (
            <StyledProfile>
                {routine ? 
                    (<p>You have a routine</p>) 
                    :
                    (<p><CreateRoutine user={data.me} /> </p>)
                }
            </StyledProfile>
    )
}