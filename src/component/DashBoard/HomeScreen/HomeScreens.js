import React, { Component } from "react";
import { Image, View } from "react-native";
import { Container, Content } from "native-base";
// import Login from "./src/component/Login";

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        style={{
                            height: 800,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        source={{
                            uri: "https://images.pexels.com/photos/417014/pexels-photo-417014.jpeg"
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
