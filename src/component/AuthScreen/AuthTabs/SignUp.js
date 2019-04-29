
import React, { Component } from "react";
import { Container, Button, Icon, Content, Text, Form, Input, Item, Card, IconNB, Picker } from "native-base";
import styles from '../../../Style/styles';
import { connect } from "react-redux";
import { signupUser } from '../../../redux/session';
// import console = require("console");


class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            psw: "",
            gender: "male",
            success: false,
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
    handelSubmit = () => {
        this.props.signup(this.state);
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.mb}>
                        {this.props.error && <Text style={{ color: 'red' }}> {JSON.stringify(this.props.error)}</Text>}
                        {this.props.user && <Text style={{ color: 'green' }}> {JSON.stringify(this.props.user)}</Text>}

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


const mapDispatchToProps = {
    signup: signupUser
}

const mapStateToProps = state => ({
    user: state.session.loading,
    error: state.session.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);