/**
 * @xhuabu
 * @create by x
 */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    Navigator
} from 'react-native';

import SecondCom from './SecondCom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondCom',
                component: SecondCom,
            })
        }
    }
    render() {
        return (
            <View>
                <Text onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </Text>
            </View>
        );
    }
}