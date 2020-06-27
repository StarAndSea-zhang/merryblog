// @ts-ignore
import * as React from 'react';
import  {useState} from 'react';
import marked from 'marked'
import '../static/less/article-create.less'
import {Row, Col, Input, Select, Button, DatePicker} from 'antd'



// 使用接口代替 PropTypes 进行类型校验
// const Counter = ({ value }: Iprops) => {
//     return <p>Clicked: { value } times</p>
// }

// export default Counter;


// 使用接口代替 PropTypes 进行类型校验
const CreateArticle : React.FC<{}> = (props)=> {

        const {Option} = Select;
        const {TextArea} = Input;
        const [articleContent, setArticleContent] = useState(''); // markdown的编辑内容
        const [markdownContent, setMarkdownContent] = useState('预览内容');  // html内容
        // const [setIntroducemd] = useState()            // 简介的markdown内容
        // const [setIntroducehtml] = useState('等待编辑') // 简介的html内容
        const changeContent = (e:any)=>{
            setArticleContent(e.target.value)
            const html=marked(e.target.value)
            setMarkdownContent(html)
        }

        // const changeIntroduce = (e:any)=>{
        //     setIntroducemd(e.target.value)
        //     let html=marked(e.target.value)
        //     setIntroducehtml(html)
        // }

        return (
            <div className="a-create">
                <Row gutter={5}>
                    <Col span={18}>
                        <Row gutter={10}>
                            <Col span={20}>
                                <Input
                                    placeholder="博客标题"
                                    size="large"/>
                            </Col>
                            <Col span={4}>
                                &nbsp;
                                <Select defaultValue="Sign Up" size="large">
                                    <Option value="Sign Up">视频教程</Option>
                                </Select>
                            </Col>
                        </Row>
                        <br/>
                        <Row gutter={10}>
                            <Col span={12}>
                                <TextArea
                                    value={articleContent}
                                    onChange={changeContent}
                                    onPressEnter={changeContent}
                                    className="a-create__content"
                                    rows={35}
                                    placeholder="文章内容"
                                />
                            </Col>
                            <Col span={12}>
                                <div
                                    className="a-create__html"
                                    dangerouslySetInnerHTML = {{__html:markdownContent}} />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6}>
                        <Row>
                            <Col span={24}>
                                <Button size="large">暂存文章</Button>&nbsp;
                                <Button type="primary" size="large">发布文章</Button>
                                <br/>
                            </Col>
                            <Col span={24}>
                                <br/>
                                <TextArea
                                    rows={4}
                                    placeholder="文章简介"
                                />
                                <br/><br/>
                                <div  className="introduce-html"/>
                            </Col>

                            <Col span={12}>
                                <div className="date-select">
                                    <DatePicker
                                        placeholder="发布日期"
                                        size="large"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
}
export default CreateArticle;