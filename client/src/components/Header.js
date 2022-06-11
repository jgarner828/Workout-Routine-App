import React from 'react';

import { StyledHeader } from './styles/Header.styled';

import {Link} from 'react-router-dom';



export default function Header(props) {

    return (
            <StyledHeader>
                   <Link to="/"><h1>Workout</h1></Link>
            </StyledHeader>
    )
}