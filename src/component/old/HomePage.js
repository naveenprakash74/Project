

import React, { Component } from "react";
import { Image, Dimensions, View } from "react-native";
import { Container, Footer, FooterTab, Button, Icon, Text} from "native-base";
// import Login from "./src/component/Login";

export default class HomePage extends Component {
    render() {
        const { height, width } = Dimensions.get("screen");
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            height,
                            width
                            // display: "flex"
                        }}
                        source={{
                            uri: "https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg"
                        }}
                    />
                </View>

                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Icon name="contact" />
                            <Text>Login</Text>
                        </Button>
                        <Button vertical onPress={() => { this.props.navigation.navigate('SignUp') }}>
                            <Icon name="person-add" />
                            <Text>Sign Up</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}