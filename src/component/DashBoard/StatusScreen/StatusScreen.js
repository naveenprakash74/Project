import React, { Component } from "react";

import { Container, Button, Right, Icon, Header, Title, Content } from "native-base";

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
            </Container>
        );
    }
}
