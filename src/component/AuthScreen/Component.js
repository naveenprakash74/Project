import React, { Component } from 'react'
import { View, Alert } from 'react-native'

import AuthTabs from './AuthTabs'
import SplashScreen from '../Splashscreen/SplashScreeen';

class AuthScreenComponent extends Component {

    // componentDidUpdate(prevProps) {
    //     if (!prevProps.error && this.props.error) {
    //         Alert.alert('error', this.props.error);
    //     }
    // }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
                <AuthTabs />
                {this.props.loading && <SplashScreen />}
            </View>)
    }
}



export default AuthScreenComponent
