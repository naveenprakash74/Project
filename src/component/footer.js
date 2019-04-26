

import React, { Component } from "react";
import { Footer, FooterTab, Text, Button, Icon } from "native-base";

export default class FTR extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => { this.props.navigation.navigate('HomeScreen') }}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical onPress={() => { this.props.navigation.navigate('ChatScreen') }}>
                        <Icon name="chatboxes" />
                        <Text>Chat</Text>
                    </Button>
                    <Button vertical onPress={() => { this.props.navigation.navigate('StatusScreen') }}>
                        <Icon name="pulse" />
                        <Text>Status</Text>
                    </Button>
                    <Button vertical onPress={() => { this.props.navigation.navigate('ProfileScreen') }}>
                        <Icon name="person" />
                        <Text>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
