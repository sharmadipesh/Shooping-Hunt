import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import {Routes} from 'config/Routes';
import {connect} from 'react-redux';
import {loginHandler} from 'redux/actions/Auth';

class Login extends Component {

    onFinish = (value) => {
        let data = {
            user:{
                email:value.email,
                password:value.password
            },
            device_detail:{
                device_type: 'web',
                player_id: ""
            },
        }
        this.props.loginHandler(data,(r)=>{
            message.success(r.message);
            this.props.history.push(Routes.Dashboard);
        });
    }

    render() {
        return (
            <div className="auth-layout-container d-flex">
                <div className="part-one d-flex flex-column justify-content-center align-items-center">
                    <img alt="login" src="img/login.svg" className="auth-img"/>
                </div>
                <div className="part-two d-flex flex-column justify-content-center">  
                    {/* <div></div> */}
                    <div className="d-flex align-items-center justify-content-center mb-30">
                        <img alt="login" src="img/shop.svg" height="40px"/>
                        <div className="company-name">ShoppingHunt</div>
                    </div>
                    <Form
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        colon={false}
                            onFinish={this.onFinish}
                        //   onFinishFailed={onFinishFailed}
                        layout={"vertical"}
                    >
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
                        {/* <Form.Item  name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="mt-20">
                                Sign in
                            </Button>
                        </Form.Item>
                        <div className="text-center register-now-text">
                            Don't have an account? <span className="clickable company-name" onClick={()=>this.props.history.push(Routes.Signup)}>Register Now</span>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

// export default Login;
function mapStateToProps(state){
    return{
    }
}

export default connect(mapStateToProps,{
    loginHandler
})(Login);