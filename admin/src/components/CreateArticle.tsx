// @ts-ignore
import * as React from 'react';
import {useEffect, useState} from 'react';
import marked from 'marked'
import '../static/less/article-create.less'
import {Row, Col, Input, Select, Button, DatePicker, Form, message} from 'antd'
import {articleCreate, articleUpdate, typeList} from "../api/Article";
import ConstantField from "../api/ConstantField";
import {IArticle} from "../types/Article";


// 使用接口代替 PropTypes 进行类型校验
// const Counter = ({ value }: Iprops) => {
//     return <p>Clicked: { value } times</p>
// }

// export default Counter;


// 使用接口代替 PropTypes 进行类型校验
const CreateArticle: React.FC<{}> = (props) => {

    const {Option} = Select;
    const {TextArea} = Input;
    const [content, setArticleContent] = useState(''); // markdown的编辑内容
    const [articleId, setArticleId] = useState(0)   // 文章ID
    const [isDraft, setIsDraft] = useState(ConstantField.FALSE)   // 默认为直接发布

    const [title, setArticleTitle] = useState('')   // 文章标题
    const [showDate] = useState()   // 发布日期
    const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息

    const [markdownContent, setMarkdownContent] = useState('预览内容');  // html内容
    // const [setIntroducemd] = useState()            // 简介的markdown内容
    const [introduce, setIntroducehtml] = useState('等待编辑') // 简介的html内容
    // const [selectedType] = useState(1) // 选择的文章类别

    useEffect(() => {
        getTypeList()
    }, [])

    const changeContent = (e: any) => {
        setArticleContent(e.target.value)
        const html = marked(e.target.value)
        setMarkdownContent(html)
    }

    // const selectTypeHandler = (value)=>{
    //     setSelectType(value);
    // }

    const getTypeList = async () => {
        const res = await typeList();
        if (res.code === ConstantField.SUCEESS) {
            setTypeInfo(res.data)
        }
    }

    // const draftArticle = async (values: IArticle) => {
    //     const res = await articleCreate(values)
    //     if (res.code ===ConstantField.SUCEESS){
    //         message.success(ConstantField.ARICLE_CREATE_SUCEESS);
    //         // 回到列表页
    //     }
    // }

    const saveArticle = async (values: IArticle) => {
        //新建文章
        if (isDraft===ConstantField.FALSE){
            values.isDraft = ConstantField.FALSE;
            if (articleId){
                values.id = articleId;
            }
            const res = await articleCreate(values)
            if (res.code ===ConstantField.SUCEESS){
                message.success(ConstantField.ARICLE_CREATE_SUCEESS);
                // 回到列表页
            }
        } else{
            //草稿
            values.isDraft = ConstantField.TRUE;
            const res = await articleUpdate(values)
            if (res.code ===ConstantField.SUCEESS){
                message.success(ConstantField.ARICLE_CREATE_SUCEESS);
                setArticleId(res.data.id);
            }
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
                                    name="title"
                                    rules={[{required: true, message: '请输入文章标题'}]}
                                >
                                    <Input
                                        value={title}
                                        onChange={e => {
                                            setArticleTitle(e.target.value)
                                        }}
                                        placeholder="博客标题"
                                        size="large"/>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item name="typeId" rules={[{required: true, message: '请选择文章类型'}]}>
                                    <Select placeholder="文章类型" size="large" allowClear>
                                        {
                                            typeInfo.map(
                                                (item: IType, index: number) => {
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
                                    name="content"
                                    rules={[{required: true, message: '文章内容不能为空'}]}
                                >
                                    <TextArea
                                        value={content}
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
                                    dangerouslySetInnerHTML={{__html: markdownContent}}/>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6}>
                        <Row>
                            <Col span={24}>
                                <Button size="large" htmlType="submit" onClick={()=>{
                                    setIsDraft(ConstantField.TRUE);
                                }}>暂存文章</Button>&nbsp;
                                <Button type="primary" size="large" htmlType="submit">发布文章</Button>
                                <br/>
                            </Col>
                            <Col span={24}>
                                <br/>
                                <Form.Item
                                    name="introduce"
                                    rules={[{required: true, message: '请输入文章简介'}]}
                                >
                                    <TextArea
                                        rows={4}
                                        value={introduce}
                                        onChange={(e) => {
                                            setIntroducehtml(e.target.value)
                                        }}
                                        placeholder="文章简介"
                                    />
                                </Form.Item>
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