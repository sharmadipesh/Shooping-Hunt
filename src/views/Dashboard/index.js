import React, { Component } from 'react';
import { Card,Button,Modal,Form, message, InputNumber } from 'antd';
import {products} from 'dummy_data/dummy';
import idx from 'idx'; 
import {connect} from 'react-redux';
import {productAddToCart} from 'redux/actions/ProductOperation';
// import addToCart from "./AddtoCard";

class Dashboard extends Component {

    state = {
        isAddCartOpen: false,
        productInformation:null
    };

    addToCartHandler(isAddCartOpen,productInformation) {
        this.setState({ isAddCartOpen,productInformation });
    }

    onFinish = (values,p) =>{
        let data = {
            ...values,
            ...p
        }
        let finalData = [data,...this.props.productCart];
        this.props.productAddToCart(finalData,()=>{
            message.success(`${p.Name} is added to your cart.`);
            this.addToCartHandler(false,{});
        })
    }

    render() {
        console.log("11111111 ",this.props.productCart)
        return (
            <div>
                {/* Dashboard */}
                <div className="d-flex flex-wrap justify-content-between p-30">
                    {products.map((product,index)=>
                        <div key={index} className="mb-20 product-information">
                            {product.qty !== 0 ? null :
                            <img src="img/sold.svg" className="sold-out"/>}
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={product.Name} src={product.image} />}
                            >
                                <div className="mb-10 product-name">
                                    {product.Name}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-10">
                                    <div>Qty : {product.qty}</div>
                                    <div>Price : {product.price}</div>
                                </div>
                                <Button type="primary" onClick={() => this.addToCartHandler(true,product)}  block disabled={product.qty === 0 ? true :false}>
                                    Add to cart
                                </Button>
                            </Card>
                        </div>
                    )}
                </div>
                <Modal
                    title={idx(this.state.productInformation,_=>_.Name)} 
                    centered
                    visible={this.state.isAddCartOpen}
                    // onOk={() => this.addToCartHandler(false)}
                    onCancel={() => this.addToCartHandler(false)}
                    footer={false}
                >
                    <div className="d-flex">
                        <div className="mr-20">
                            <img 
                                alt={idx(this.state.productInformation,_=>_.Name)} 
                                src={idx(this.state.productInformation,_=>_.image)}
                                height="200px"
                                width="175px"
                            />
                        </div>
                        <div>
                            <div  className="product-modal-information">
                                Qty : {idx(this.state.productInformation,_=>_.qty)}
                            </div>
                            <div  className="product-modal-information mt-10">
                                Price : {idx(this.state.productInformation,_=>_.price)}
                            </div>
                            <Form  
                                name="nest-messages" 
                                className="mt-20"
                                onFinish={(v)=>this.onFinish(v,this.state.productInformation)} 
                                // validateMessages={validateMessages}
                                initialValues={{
                                    qty: "",
                                }}
                            >
    
                                <Form.Item
                                    name="qty"
                                    label="Add Qty"
                                    rules={[
                                        {
                                            type: 'number',
                                            min: 0,
                                            max: idx(this.state.productInformation,_=>_.qty),
                                        },
                                    ]}
                                >
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" className="mt-30 ml-40" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

// export default Dashboard;
function mapStateToProps(state){
    return{
        productCart:state.ProductOperation.productCart
    }
}

export default connect(mapStateToProps,{
    productAddToCart,
})(Dashboard);