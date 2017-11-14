import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/HomeScreen';
import Routine from './components/RoutineScreen';
import Exercise from './components/ExcerciseScreen';
import { Provider } from 'react-redux';
import { store } from './store'
import Config from './config'
import axios from 'axios'

axios.defaults.baseURL = Config.dev.baseUrl;

const Nav = StackNavigator({
    Home: { screen: Home },
    Routine: { screen: Routine },
    Exercise: { screen: Exercise }
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Nav />
            </Provider>
        );
    }
}
