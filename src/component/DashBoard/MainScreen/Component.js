import React, { Component } from 'react'
import { View, Alert, Text } from 'react-native'

import MainStack from './HomeTabs'
class MainScreenComponent extends Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('error', this.props.error);
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
                <MainStack />
            </View>
        )
    }
}


export default MainScreenComponent
