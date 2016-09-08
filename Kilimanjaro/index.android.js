/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Main from './component/Main'

class Kilimanjaro extends Component {

    render() {
        return (
            <Main style = {styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('Kilimanjaro', () => Kilimanjaro);
