// @ts-ignore
import * as React from 'react';
import {useEffect, useState} from 'react';
import marked from 'marked'
import '../static/less/article-create.less'
import {Row, Col, Input, Select, Button, DatePicker, message, Form} from 'antd'
import {typeList} from "../api/Article";



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
    const [introducemd] = useState()            // 简介的markdown内容

    const [articleTitle,setArticleTitle] = useState('')   // 文章标题
    const [showDate] = useState()   // 发布日期
    const [typeInfo ] = useState([]) // 文章类别信息

    const [markdownContent, setMarkdownContent] = useState('预览内容');  // html内容
        // const [setIntroducemd] = useState()            // 简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') // 简介的html内容
    const [selectedType] = useState(1) // 选择的文章类别

    useEffect(()=>{
        getTypeList()
    },[])

    const changeContent = (e:any)=>{
            setArticleContent(e.target.value)
            const html=marked(e.target.value)
            setMarkdownContent(html)
        }

        // const selectTypeHandler = (value)=>{
        //     setSelectType(value);
        // }

    const getTypeList = async ()=>{
        const res = await typeList();
        console.log('d',res)
    }

        const saveArticle = (values:any)=>{
        console.log(values)
            if(!selectedType){
                message.error('必须选择文章类型！')
            }else if(!articleTitle){
                message.error('文章标题不能为空！')
            }else if(!articleContent){
                message.error('文章内容不能为空！')
            }else if(!introducemd){
                message.error('文章简介不能为空！')
            }
        }

        // const changeIntroduce = (e:any)=>{
        //     setIntroducemd(e.target.value)
        //     let html=marked(e.target.value)
        //     setIntroducehtml(html)
        // }

        return (
            <div className="a-create">
                <Form
                    onFinish={saveArticle}
                >
                <Row gutter={5}>
                    <Col span={18}>
                        <Row gutter={10}>
                            <Col span={20}>
                                <Form.Item
                                    name="articleTitle"
                                    rules={[{ required: true, message: '文章标题不能为空' }]}
                                >
                                <Input
                                    value={articleTitle}
                                    onChange={e =>{setArticleTitle(e.target.value)}}
                                    placeholder="博客标题"
                                    size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item name="selectedType" rules={[{ required: true }]}>
                                <Select placeholder="文章类型" size="large" allowClear>
                                    {
                                        // console.log(typeInfo);
                                        typeInfo.map(
                                            (item:IType,index:number)=>{
                                                return <Option key={index} value={item.id}>{item.name}</Option>
                                            }
                                        )
                                    }
                                </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <br/>
                        <Row gutter={10}>
                            <Col span={12}>
                                <Form.Item
                                    name="articleContent"
                                    rules={[{ required: true, message: '文章内容不能为空' }]}
                                >
                                <TextArea
                                    value={articleContent}
                                    onChange={changeContent}
                                    onPressEnter={changeContent}
                                    className="a-create__content"
                                    rows={35}
                                    placeholder="文章内容"
                                />
                                </Form.Item>
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
                                <Button size="large" htmlType="submit">暂存文章</Button>&nbsp;
                                <Button type="primary" size="large" htmlType="submit">发布文章</Button>
                                <br/>
                            </Col>
                            <Col span={24}>
                                <br/>
                                <Form.Item
                                    name="introducemd"
                                    rules={[{ required: true, message: '文章简介不能为空' }]}
                                >
                                <TextArea
                                    rows={4}
                                    onChange={(e)=>{setIntroducehtml(e.target.value)}}
                                    placeholder="文章简介"
                                />
                                </Form.Item>
                                <br/><br/>
                                <div  className="introduce-html"
                                    dangerouslySetInnerHTML={{__html:introducehtml}}/>
                            </Col>

                            <Col span={12}>
                                <div className="date-select">
                                    <DatePicker
                                        value={showDate}
                                        // onChange={(date,dateString)=>{setShowDate(dateString)}}
                                        placeholder="发布日期"
                                        size="large"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Form>
            </div>
        )
}
export default CreateArticle;