import React, { Component } from 'react';
import { Form, Input, Button, Select,Card } from 'antd';
import Header from 'views/components/Header';

class Signup extends Component {
    render() {
        return (
            <div className="signup-form-container">
                <Header {...this.props}/>
                <div className="plr-30 ptb-20">
                    <Card>
                        <div className="signup-form d-flex">
                            <div className="part-one plr-100 d-flex flex-column justify-content-center">
                                <Form
                                    name="basic"
                                    initialValues={{
                                
                                    }}
                                    colon={false}
                                    //   onFinish={onFinish}
                                    //   onFinishFailed={onFinishFailed}
                                    layout={"vertical"}
                                >
                                    <Form.Item label="First Name" name="first_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your first name',
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Last Name" name="last_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your last name',
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
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

                                    <Form.Item label="Gender" name="gender" rules={[
                                        {
                                            required: true,
                                            message: 'Please select your Gender',
                                        },
                                        ]}>
                                        <Select>
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Address (Line 1)" name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your address',
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Address (Line 2)" name="address_2"
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block className="mt-10">
                                            Signup
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="part-two d-flex align-items-center justify-content-center">
                                <img alt="login" src="img/signup.svg" className="auth-img"/>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Signup;