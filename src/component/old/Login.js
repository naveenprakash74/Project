
import React, { Component } from "react";
import { Container, Button, Icon, Content, Text, Form, Input, Item, Card, IconNB } from "native-base";
// import { StyleSheet, ActivityIndicator } from 'react-native';
import styles from '../Style/styles';
import Firebase from "../config/firebase";
import SplashScreen from './SplashScreen';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            psw: "",
            success: false,
            errorMessage: null,
            isLoading: false
        }
    }
    validate = (text) => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            // ToastAndroid.show("Email is Not Correct", ToastAndroid.SHORT);
            this.setState({ success: false });
        }
        else {
            this.setState({ success: true });
            this.setState({ email: text });
        }
    }
    handelLogin = () => {
        this.setState({ isLoading: true })
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.psw).then(data => {
            this.setState({ isLoading: false })
            this.props.navigation.push('MainStack');
        }).catch(error => this.setState({ errorMessage: error.message, isLoading: false }));
    }
    render() {
        if (this.state.isLoading) {
            return <SplashScreen />
        } else {
            return (
                <Container style={styles.container}>
                    <Content>
                        <Card style={styles.mb}>
                            {this.state.errorMessage && <Text style={{ color: 'red' }}> {this.state.errorMessage}</Text>}
                            <Form>
                                <Item>
                                    <Icon active name="mail" />
                                    <Input placeholder="Email" onChangeText={(text) => this.validate(text)} />
                                    {
                                        this.state.success ?
                                            <IconNB style={styles.success} name="ios-checkmark-circle" />
                                            :
                                            <IconNB style={styles.error} name="ios-close-circle" />
                                    }
                                </Item>
                                <Item>
                                    <Icon active name="key" />
                                    <Input placeholder="Password" secureTextEntry={true} onChangeText={(psw => { this.setState({ psw }) })} />
                                </Item>
                            </Form>
                            <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handelLogin}>
                                <Text>Log in</Text>
                            </Button>
                        </Card>


                    </Content>
                </Container>
            );
        }

    }
}

