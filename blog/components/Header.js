import React from 'react'
import {Row,Col,Menu,Icon} from "antd";
import "@/public/style/components/header.less"
import { HomeOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons';
const Header = ()=>{
    return (
    <div className="m-header">
        <div className="m-header__background">
            <p className="motto">
                希望你可以记住我，记住我这样活过，这样在你身边呆过。
            </p>
            <div className="header-date">2020年 6月 9日</div>
        </div>
        <Row className="m-header__nav" type='flex' justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={14} sm={14}  md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="catagory" icon={<UnorderedListOutlined />}>
                        目录
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
        <style jsx>{`

      `}</style>
    </div>

    )
}

export default Header;