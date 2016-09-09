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
    Image,
    StyleSheet,
    TouchableOpacity,
    Navigator
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Menu from './Menu';

const uri_image_menu = 'http://p2.gexing.com/G1/M00/43/39/rBACFFOLHk2i34HeAAAd0wGPTTw022_200x200_3.jpg?recache=20131108';

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        top:20,
        padding:10,
    },
    caption:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },

});


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            selectedItem:'About Us',
        };
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen,
        });
    }

    updateMenuState(isOpen){
        this.setState({isOpen:isOpen});
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen:false,
            selectedItem:item,
        });
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <SideMenu 
                menu ={menu}
                isOpen = {this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style = {styles.container}>
                    <Text style = {[styles.instructions,{color:'red'}]}>
                        当前选中的菜单是：{this.state.selectedItem}
                    </Text>
                </View>

                <Button style = {styles.button} onPress = {() => this.toggle()}>
                    <Image 
                        source = {{uri:uri_image_menu,width:32,height:32,}}/>
                </Button>
            </SideMenu>
        );
    }
}

class Button extends Component{
    handlePress(e){
        if (this.props.onPress) {
            this.props.onPress(e);
        };
    }

    render(){
        return (
            <TouchableOpacity
                onPress = {this.handlePress.bind(this)}
                style = {this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}