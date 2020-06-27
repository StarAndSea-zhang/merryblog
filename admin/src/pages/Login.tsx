import {Button, Card, Checkbox, Form, Input, Spin} from "antd";
import * as React from 'react';
import {login} from "../api/Login";
import ConstantField from "../api/ConstantField";


export default class Login extends React.PureComponent {

    constructor(props:any){
        super(props)
        // @ts-ignore
        this.props = props;
    }

    public checkLogin = async (values:any) =>{
        // setIsLoading(true)
        const res = await login(values);
        if (res.code === ConstantField.SUCEESS){
            console.log('res')
            localStorage.setItem('token',res.data.token);
            (this.props as any).history.push('/home')
            // console.log()
        }
        // setIsLoading(false)
    }
    public onFinishFailed (errorInfo:any)  {
        console.log('Failed:', errorInfo);
    }

    public render() {
        const tailLayout = {
            wrapperCol: { offset: 6, span: 18 },
        };
        return (
            <div className="login-div">
                <Spin tip="Loading..." spinning = {false}>
                    <Card title="金穗的后台管理系统" bordered={true} style={{width: 400}}>
                        <Form
                            name="basic"
                            labelCol={{ span: 6 }}
                            initialValues={{ remember: true }}
                            onFinish={this.checkLogin}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="管理员"
                                name="username"
                                initialValue={"admin"}
                                rules={[{ required: true, message: '请输入管理员账号' }]}
                            >
                                <Input defaultValue="admin"/>
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                initialValue={"19950214"}
                                rules={[{ required: true, message: '请输入管理员密码' }]}
                            >
                                <Input.Password defaultValue="19950214"/>
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Spin>
            </div>
        )
    }
}
