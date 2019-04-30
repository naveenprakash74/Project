import React, { Component } from 'react'
import { View, Alert, Text } from 'react-native'

import StatusScreen from './StatusScreen'
import FTR from '../footer/footer';


class StatusScreenComponent extends Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('error', this.props.error);
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
                <StatusScreen />
                <FTR navigation={this.props.navigation} />
            </View>
        )
    }
}


export default StatusScreenComponent
