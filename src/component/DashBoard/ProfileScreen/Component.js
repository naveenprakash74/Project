import React, { Component } from 'react'
import { View, Alert, Text } from 'react-native'

import ProfileScreen from './ProfileScreen'
import FTR from '../footer/footer';


class ProfileScreenComponent extends Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('error', this.props.error);
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
                <ProfileScreen />
                <FTR navigation={this.props.navigation} />
            </View>
        )
    }
}
export default ProfileScreenComponent;