/**
 * @xhuabu
 * @create by Aaron
 * @侧边栏的布局文件
 */
'use strict'

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView,
    Image,
    Platform,
    AlertIOS,
    Modal,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';


import SideMenuCell from './SideMenuCell';

var GameListURL = "game/list";

var DataSource = [{
    "gameName": "北京28", //游戏名称
    "icon": "http://chenfu01.oss-cn-shanghai.aliyuncs.com/kilimanjaro/bj28.jpeg", //游戏图标
    "id": 1, //游戏ID
    "interval": 60, //刷新时间
    "visible": 1, //是否显示 1-显示 0-不显示
    "selected": true, //选中
}, {
    "gameName": "加拿大28", //游戏名称
    "icon": "http://chenfu01.oss-cn-shanghai.aliyuncs.com/kilimanjaro/canada28.jpeg", //游戏图标
    "id": 2, //游戏ID
    "interval": 60, //刷新时间
    "visible": 1, //是否显示 1-显示 0-不显示
    "selected": false, //未选中
}];


var ds = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
});

export default class SideMenuView extends Component {
    constructor(props) {
        super(props);

        var icon = require('../resource/img/icon_profile.jpg');
        this.state = {
            profileIcon: icon,
            nickName: 'Aaron',
            loginViewVisible: false,
            dataSource: ds.cloneWithRows(DataSource),
        };

        this.reloadData = this.reloadData.bind(this);
    }

    componentWillMount() {

    }

    // 刷新数据
    reloadData() {
        this.setState({
            profileIcon: icon,
            nickName: loginInfo.data.nickName,
        });
    }
    
    static propTypes = {
        onItemSelected:React.PropTypes.func.isRequired,
    };

    // 头像区域
    renderHeaderView() {
        return (
            <View>
                <View style = {styles.profile}>
                    <View style = {styles.profileRow}>
                        <Image 
                            source = {this.state.profileIcon}
                            style = {styles.profileIcon}
                        />
                        <View style = {styles.profileColumn}>
                            <Text style = {styles.profileText}>{this.state.nickName}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.lineSeparator}></View>
            </View>
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style = {styles.sectionHeader} key = {sectionID}>
                <Text style = {styles.sectionHeaderTitle}>游戏场次</Text>
            </View>
        );
    }

    render(){
        return (
            <ScrollView scrollsToTop = {false} style = {styles.container}>
                {this.renderHeaderView()    }

                <ListView 
                    ref = "listView"
                    enableEmptySections = {true} 
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow.bind(this)}
                    renderSectionHeader = {this.renderSectionHeader}
                    automaticallyAdjustContentInsets = {true}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={false}
                />
                
            </ScrollView>
        );
    }

    renderRow(
        data: Object,
        sectionID: number | string,
        rowID: number | string,
        highlightRow: (sectionID: number, rowID: number) => void
    ) {
        return (
            <SideMenuCell 
                key = {data.id} 
                onSelect = {() => this.onCellSelect(data, rowID)} 
                onHighlight = {() => highlightRow(sectionID, rowID)}
                onUnhighlight = {() => highlightRow(null, null)}
                data = {data}
            />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FF4040',
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
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 1,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 120,
        paddingLeft: 20,
        paddingTop: 40,
        paddingRight: 20,
        paddingBottom: 20,
    },
    lineSeparator: {
        backgroundColor: 'white',
        height: 1,
    },
    profileText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 8,
    },
    sectionHeader: {
        justifyContent: 'center',
        height: 30,
    },
    sectionHeaderTitle: {
        color: 'white',
        fontSize: 14,
        marginLeft: 20,
    },
});