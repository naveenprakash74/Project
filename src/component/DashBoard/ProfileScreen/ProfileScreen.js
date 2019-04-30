import React, { Component } from "react";
import { Container, Content, Left, Button, Right, Icon, Body, Header, Title } from "native-base";

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
            </Container >
        );
    }
}
