import React, { Component } from "react";
import { View, ActivityIndicator } from 'react-native';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}