import React from "react";
import { Provider } from 'react-redux';

import MainAppContainer from "./src/component/MainApp/index";
import {configureStore} from './src/redux/index'

const store = configureStore();
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <MainAppContainer />
      </Provider>
    );
  }
}

