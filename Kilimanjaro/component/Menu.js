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
    Dimensions,
    ScrollView,
    View,
    Image,
    Text,
    Navigator
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'http://p2.gexing.com/G1/M00/43/39/rBACFFOLHk2i34HeAAAd0wGPTTw022_200x200_3.jpg?recache=20131108';

const styles = StyleSheet.create({
    menu:{
        flex:1,
        width:window.width,
        height:window.height,
        backgroundColor:'green',
        padding:20,
    },
    avatarContainer:{
        marginBottom:20,
        marginTop:20,
    },
    avatar:{
        width:48,
        height:48,
        borderRadius:24,
        flex:1,
    },
    name:{
        position:'absolute',
        left:70,
        top:20,
    },
    item:{
        fontSize:16,
        fontWeight:'300',
        paddingTop:10,
    },
});

export default class Menu extends Component {
    
    render(){
        return (

        )
    }
}