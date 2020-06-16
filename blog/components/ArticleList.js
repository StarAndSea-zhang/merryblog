import React from 'react'
import Router from 'next/router'
import {Row,Col,List, Avatar, Space,Icon} from "antd";

import "@/public/style/components/article.less"
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Home from "../pages";
const listData = [];

for (let i = 0; i < 4; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

        render() {
        return (<div className="m-article">
            <Row className="m-article__main" type='flex' justify="center">
                <Col className="m-article__left" xs={24} sm={24}  md={16} lg={16} xl={16}>
                    <List header={<div>最新日志</div>}
                          locale={{emptyText: '暂无数据'}}
                          itemLayout="vertical"
                          dataSource={this.props.list}
                          renderItem={item => (
                              <List.Item
                                  onClick={()=>{Router.push('/articles')}}
                                  key={item.title}
                                  actions={[
                                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                  ]}
                                  extra={
                                      <img
                                          width={545}
                                          alt="logo"
                                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                      />
                                  }
                              >
                                  <List.Item.Meta
                                      avatar={<Avatar src={item.typeId} />}
                                      title={<a href={item.href}>{item.title}</a>}
                                      description={item.introduce}
                                  />
                                  {item.content}
                              </List.Item>
                          )}
                    >
                    </List>
                </Col>
            </Row>
        </div>);
    }
}

