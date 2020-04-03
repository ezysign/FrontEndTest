import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { SET_USER, SET_USER_ERROR } from '../redux/constants';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};



const LoginForm = () => {

    const dispath = useDispatch();

    const onFinish = values => {
        if (values.username === 'demo' && values.password === 'demo') {
            dispath({ type: SET_USER, payload: values });
        } else {
            dispath({ type: SET_USER_ERROR });
            message.error("Invalid Username & Password");
        }
    };



    return (
        <Form
            {...layout}
            name="loginForm"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;