import React, {Component} from 'react';
import {Offline, Online} from 'react-detect-offline';
import {notification} from 'antd';


export default class DetectOnline extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div >
                <COnline desc="在线" >ces</COnline>
                <COffline desc="离线" >dd</COffline>
            </div>
        );
    }
}

class COnline extends Online{

    componentDidUpdate() {
        console.log(this.props.children, "ddd");
        this.props.children && notification.open({
            message: '网络状态',
            description: "在线",
        });
    }
}
class COffline extends Offline{

    componentDidUpdate() {
        console.log(this.props.children, "ddd");
        this.props.children && notification.open({
            message: '网络状态',
            description: "离线",
        });
    }
}
