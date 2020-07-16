import React, { Component } from 'react';
import { Card,Button } from 'antd';
import {products} from 'dummy_data/dummy';

class Dashboard extends Component {
    render() {
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
                                <Button type="primary"  block disabled={product.qty === 0 ? true :false}>
                                    Add to cart
                                </Button>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Dashboard;