// import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import HomePage from './HomePage';
import LoginPage from './Login';
import SignUpPage from './SignUp';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./profile";
import ChatScreen from "./ChatScreen";
import StatusScreen from "./StatusScreen";


const MainStack = createBottomTabNavigator(
    {
        HomeScreen: { screen: HomeScreen, navigationOptions: { tabBarVisible: false } },
        ProfileScreen: { screen: ProfileScreen, navigationOptions: { tabBarVisible: false } },
        ChatScreen: { screen: ChatScreen, navigationOptions: { tabBarVisible: false } },
        StatusScreen: { screen: StatusScreen, navigationOptions: { tabBarVisible: false } }

    },
    {
        headerMode: 'none',
        initialRouteName: "HomeScreen"
    }
);



const AppStackNaigator = createStackNavigator({
    Home: HomePage,
    Login: { screen: LoginPage },
    SignUp: SignUpPage,
    MainStack: {
        screen: MainStack
    }
},
    {
        // mode: 'modal',
        headerMode: 'none',
    }
);


export default createAppContainer(AppStackNaigator);

