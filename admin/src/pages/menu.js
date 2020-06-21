import React from 'react';
import {Layout, Menu} from 'antd';
import '@/static/less/menu.less'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    FileAddOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import { Route } from "react-router-dom";
import createArticle from '@/pages/article-create'

const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

class Home extends React.Component {
    state = {
        collapsed: false,
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
                    <Header className="site-layout-background" style={{paddingLeft: 20}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div>
                            <Route path="/home/" exact component={createArticle} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;