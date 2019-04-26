import React, { Component } from "react";
import { Image, View } from "react-native";
import FTR from "./footer";
import { Container, Content, Left, Button, Right, Icon, Body,Header, Title } from "native-base";

// import Login from "./src/component/Login";

export default class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                </Content>
                <FTR navigation={this.props.navigation} />
            </Container >
        );
    }
}
