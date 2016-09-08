/**
 * @xhuabu
 * @create by x
 */
'use strict';

import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';

import Home from './Home';

export default class Main extends Component {

    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator = {navigator} />
    }

    render() {
        // 禁用pop手势
        var MySceneConfigs = Navigator.SceneConfigs.PushFromRight;
        MySceneConfigs.gestures.pop = null;
        return (
            <View  style = {styles.container}>
                <Navigator
                    ref = "MainNavigator" 
                    style = {styles.container}
                    initialRoute = {{
                        name: 'Main',
                        component: Home,
                    }}
                    renderScene = {this.renderScene}
                    configureScene={(route, routeStack) => MySceneConfigs}
                />
            </View>
        );
    }

    reRenderEvent() {
        console.log('Main: reRenderEvent');
        this.setState({
            reRender: true,
        });
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    nav: {
        backgroundColor: 'orange',
    }
});