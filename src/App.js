import React, {Component} from 'react';
import {Layout, notification} from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import {receiveData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Network from 'react-network';
// import Offline from './lib/offline.min';

const {Content, Footer} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };

    componentWillMount() {
        const {receiveData} = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
        // receiveData({a: 213}, 'auth');
        // fetchData({funcName: 'admin', stateName: 'auth'});
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
            // console.log(document.body.clientWidth);
        }
    }

    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const {receiveData} = this.props;
        const clientWidth = document.body.clientWidth;
        console.log(clientWidth);
        receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleNetworkChange = ({online}) => {
// eslint-disable-next-line no-undef
        console.log("--" + window.Offline + "--" +Offline);
        // eslint-disable-next-line no-undef
        window.Offline.on('confirmed-up', function () {
            console.log('----');
        });
        notification.open({
            message: '网络状态',
            description: online ? "在线" : "离线",
        });
    };

    render() {
        console.log(this.props.auth);
        console.log(this.props.responsive);
        const {auth, router, responsive} = this.props;
        return (
            <div style={{height: "100%"}}>
                <Layout className="ant-layout-has-sider">
                    {!responsive.data.isMobile &&
                    <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed}/>}
                    <Layout>
                        <HeaderCustom toggle={this.toggle} user={auth.data || {}} router={router}
                                      path={this.props.location.pathname}/>
                        <Content style={{margin: '0 16px', overflow: 'initial'}}>
                            {this.props.children}
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            React-Admin ©2017 Created by 865470087@qq.com
                        </Footer>
                    </Layout>
                    {
                        responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                            <style>
                                {`
                            #root{
                                height: auto;
                            }
                        `}
                            </style>
                        )
                    }
                </Layout>
                <Network
                    onChange={this.handleNetworkChange}
                    render={({online}) =>
                        null
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {auth = {data: {}}, responsive = {data: {}}} = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
