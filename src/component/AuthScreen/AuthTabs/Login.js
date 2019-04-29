
import React, { Component } from "react";
import { Container, Button, Icon, Content, Text, Form, Input, Item, Card, IconNB } from "native-base";
// import { StyleSheet, ActivityIndicator } from 'react-native';
import styles from '../../../Style/styles';
import { loginUser } from '../../../redux/session'
import { connect } from "react-redux";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            psw: "",
            success: false,
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
        this.props.login(this.state.email, this.state.psw);
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

const mapDispatchToProps = {
    login: loginUser
}

const mapStateToProps = state => ({
    user: state.session.loading,
    error: state.session.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)