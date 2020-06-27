import * as React from 'react';
import '../static/less/menu.less'
import {Layout, Menu} from 'antd';
import {
    FileAddOutlined,
    HomeOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import {Route} from "react-router";
const {Content,Header, Sider} = Layout;
import createArticle from '../components/CreateArticle'

interface IState {
    collapsed:boolean;
}
export default class Home extends React.PureComponent<{},IState> {
    constructor(props:{}){
        super(props);
        this.state = {
            collapsed: false,
        };
    }


    // private toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // };

    public render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible={true} collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            工作台
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FileAddOutlined />}>
                            添加文章
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ProfileOutlined />}>
                            文章列表
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background"/>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div>
                            <Route path="/home/" exact={true} component={createArticle} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
