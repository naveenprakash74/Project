import React from 'react';
import SplashScreen from '../Splashscreen/SplashScreeen';
import AuthScreen from '../AuthScreen'
import { View, Text } from 'react-native';
import DashBoard from '../DashBoard';

const ChatAppComponent = props => {
    if (props.restoring) {
        return <SplashScreen />
    } else {
        if (props.logged) {
            return <DashBoard />
        } else {
            return <AuthScreen />
        }
    }
}

export default ChatAppComponent
