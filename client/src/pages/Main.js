import React from 'react';
import Auth from "../utils/auth";
import Profile from '../components/Profile'
import Login from '../components/Login'


export default function Main() {

    if(Auth.loggedIn()) {
        return (
            <Profile />
            );
    } else {
        return (
            <Login />
            )}




}