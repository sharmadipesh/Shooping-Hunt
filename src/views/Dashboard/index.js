import React, { Component } from 'react';
import { Card } from 'antd';
import {products} from 'dummy_data/dummy';
const { Meta } = Card;

class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* Dashboard */}
                <div className="d-flex flex-wrap p-30">
                    {products.map((product,index)=>
                        <div key={index} >
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={product.name} src={product.image} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Dashboard;
{/* <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
    <Meta title="Europe Street beat" description="www.instagram.com" />
</Card> */}