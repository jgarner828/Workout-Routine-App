import React from 'react';
import { useQuery } from '@apollo/client';

import { StyledProfile } from './styles/Profile.styled';


import {QUERY_ME} from '../utils/queries'

export default function Profile() {

    const { loading, data } = useQuery(QUERY_ME);


    if (loading) {
        return <h2>LOADING...</h2>;
      }

    console.log(data.me)

    return (
            <StyledProfile>
                Inside profile and logged in
            </StyledProfile>
    )
}