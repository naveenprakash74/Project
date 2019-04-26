import React, { Component } from "react";

import FTR from "./footer";
import { Container, Content, Left, Button, Right, Icon, Body, Segment, Header, Title, Text } from "native-base";

// import Login from "./src/component/Login";

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 2
        };
    }
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Title>Chat</Title>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />

                        </Button>
                    </Right>
                </Header>
                <Segment>
                    <Button first active={this.state.seg === 1 ? true : false} onPress={() => this.setState({ seg: 1 })}>
                        <Text>Friends</Text>
                    </Button>
                    <Button active={this.state.seg === 2 ? true : false} onPress={() => this.setState({ seg: 2 })}>
                        <Text>BroadCast</Text>
                    </Button>
                    {/* <Button last active={this.state.seg === 3 ? true : false} onPress={() => this.setState({ seg: 3 })}>
                        <Text>Friends</Text>
                    </Button> */}
                </Segment>

                <Content padder>
                    {this.state.seg === 1 && <Text>Alone</Text>}
                    {this.state.seg === 2 && <Text>Broadcast</Text>}
                    {/* {this.state.seg === 3 && <Text>Friends</Text>} */}
                </Content>
                <FTR navigation={this.props.navigation} />
            </Container>
        );
    }
}
