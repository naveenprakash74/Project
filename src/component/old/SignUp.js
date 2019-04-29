
import React, { Component } from "react";
import { Container, Button, Icon, Content, Text, Form, Input, Item, Card, IconNB, Picker } from "native-base";
import styles from '../Style/styles';
import Firebase from "../config/firebase";
// import console = require("console");


export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            psw: "",
            gender: "male",
            success: false,
            errorMessage: null,
            isLoading: true
        };
    }
    validate = (text) => {
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

    filldetails = (uid) => {
        let userMobilePath = "/user/" + uid + "/details";
        Firebase.database().ref(userMobilePath).push({ name: this.state.name, gender: this.state.gender }).then(dta => this.props.navigation.navigate("HomeScreen"))
        return;
    }
    handelSubmit = () => {
        try {
            if (this.state.psw.length < 6) {
                this.setState({ errorMessage: "password should be greater then 6" })
                return;
            }
            Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.psw)
                .then(data => {
                    this.filldetails(data.user.uid);
                    return;
                })
                .catch(error => this.setState({ errorMessage: error.message }));
        } catch (error) {
            this.setState({ errorMessage: JSON.stringify(error) });
        }

    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.mb}>
                        {this.state.errorMessage && <Text style={{ color: 'red' }}> {this.state.errorMessage}</Text>}
                        <Form>
                            <Item>
                                <Icon active name="person" />
                                <Input placeholder="Full Name" onChangeText={(name) => this.setState({ name })} />
                            </Item>
                            <Item>
                                <Text>Gender:</Text>
                                <Picker iosHeader="Select one" mode="dropdown" selectedValue={this.state.selected1} onValueChange={gender => this.setState({ gender })}>
                                    <Item label="Male" value="male" />
                                    <Item label="Female" value="female" />
                                </Picker>
                            </Item>
                            <Item>
                                <Icon active name="mail" />
                                <Input placeholder="Email" onChangeText={(text) => this.validate(text)} />
                                {this.state.success ? <IconNB style={styles.success} name="ios-checkmark-circle" /> : <IconNB style={styles.error} name="ios-close-circle" />}
                            </Item>
                            <Item>
                                <Icon active name="key" />
                                <Input placeholder="Password" secureTextEntry={true} onChangeText={psw => this.setState({ psw })} />
                            </Item>
                        </Form>
                        <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handelSubmit}>
                            <Text>Sign Up</Text>
                        </Button>
                    </Card>
                </Content>
            </Container >
        );
    }
}
