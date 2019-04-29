import React, { Component } from 'react';
import { connect } from 'react-redux';

import { restoreSession } from '../../redux/session/action';


import MainAppComponent from './Component';

class MainAppContainer extends Component {

    componentDidMount() {
        this.props.restore();


    }

    render() {
        return (
            <MainAppComponent
                restoring={this.props.restoring}
                logged={this.props.logged}
                user={this.props.user} />)
    }
}

const mapStateToProps = state => ({
    restoring: state.session.restoring,
    logged: state.session.user != null,
    user: state.session.user
})

const mapDispatchToProps = {
    restore: restoreSession
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAppContainer)
