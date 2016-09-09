/**
 * @xhuabu
 * @create by x
 */
'use strict'

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    PixelRatio,
    Text,
    View,
    Image,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';

class SideMenuCell extends Component {

    render() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }

        var rowStyle = this.props.data.selected === true ? styles.rowSelect : styles.row;
        return (
            <TouchableElement
                onPress = {this.props.onSelect}
                onShowUnderlay = {this.props.onHightlight}
                onHideUnderlay = {this.props.onUnhighlight} >
                <View style = {rowStyle}>
                    <Image 
                        source = {{uri: this.props.data.icon}}
                        style = {styles.image}
                    />
                    <Text style = {styles.cellTitle} >
                        {this.props.data.gameName}
                    </Text>
                </View> 
            </TouchableElement>
        );
    }
}

var styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4040',
        flexDirection: 'row',
        padding: 8,
    },
    rowSelect: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        flexDirection: 'row',
        padding: 8,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    cellTitle: {
        flex: 1,
        color: 'white',
        height: 20,
        marginLeft: 8,
        marginRight: 8,
        fontSize: 16,
    },
});

module.exports = SideMenuCell;