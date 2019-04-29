// import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./homepage";
import LoginPage from "./Login";
import SignUpPage from "./SignUp";

const AppStackNaigator = createStackNavigator({
    Home: HomePage,
    Login: { screen: LoginPage },
    SignUp: SignUpPage
},
    {
        // mode: 'modal',
        headerMode: 'none',
    }
);


export default createAppContainer(AppStackNaigator);

