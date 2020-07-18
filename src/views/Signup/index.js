import React, { Component } from 'react';
import { Form, Input, Button, Select,Card,message } from 'antd';
import Header from 'views/components/Header';
import {connect} from 'react-redux';
import {signUpHandler} from 'redux/actions/Auth';


class Signup extends Component {

    onFinish = (value) =>{
        let data={
            user:{
                first_name:value.first_name,
                last_name:value.last_name,
                gender:value.gender,
                email:value.email,
                phone:value.phone,
                password:value.password,
            },
            device_detail:{
                device_type: 'web',
                player_id: ""
            },
            address:{
                line1:value.address,
                line2:value.address_2,
                pincode:value.pincode,
                town:value.town
            }
        }
        this.props.signUpHandler(data,(r)=>{
            if(r.message){
                message.success(r.message);
                this.props.history.push("/");
            }
        });
    }

    // getDeviceType = () => {
    //     const ua = navigator.userAgent;
    //     if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    //       return "tablet";
    //     }
    //     if (
    //       /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    //         ua
    //       )
    //     ) {
    //       return "mobile";
    //     }
    //     return "desktop";
    //   };

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
                                        onFinish={this.onFinish}
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
                                    <Form.Item 
                                    label="Phone" name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Phone',
                                            max:13,
                                            min:13
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item 
                                        label="Pincode" 
                                        name="pincode"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Pincode',
                                            max:6,
                                            min:6
                                        },
                                        ]}
                                    >
                                        <Input />
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
                                    <Form.Item label="Town" name="town"
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

// export default Signup;
function mapStateToProps(state){
    return{
    }
}

export default connect(mapStateToProps,{
    signUpHandler
})(Signup);