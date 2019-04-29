import React, { Component } from "react";

import FTR from "./footer";
import { Container, Left, Button, Right, Icon, Body, Header, Title, Content } from "native-base";

// import Login from "./src/component/Login";

export default class StatusScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Title>Status</Title>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Content>

                </Content>
                <FTR navigation={this.props.navigation} />
            </Container>
        );
    }
}
