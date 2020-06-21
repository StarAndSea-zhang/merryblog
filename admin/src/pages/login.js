import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Card, Input, Button, Spin,Form,Checkbox} from 'antd';
import {login} from "@/api/user";
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = async (values) => {
        // setIsLoading(true)
        const res  = await login(values);
        console.log(res)
        // setIsLoading(false)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-div">

            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="金穗的后台管理系统" bordered={true} style={{width: 400}}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        initialValues={{ remember: true }}
                        onFinish={checkLogin}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="管理员"
                            name="username"
                            rules={[{ required: true, message: '请输入管理员账号' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入管理员密码' }]}
                        >
                            <Input.Password />
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

export default Login