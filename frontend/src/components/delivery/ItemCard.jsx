import React, { Component } from 'react';
import { Card , Descriptions} from 'antd';

const { Meta } = Card;

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Descriptions title="Item Preview"></Descriptions>
                <Card
            hoverable
            style={{ width: "80%" }}
            cover={<img alt="example" src="https://bearappeal.com/wp-content/uploads/2020/07/olive-min.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
            </div>
         );
    }
}
 
export default ItemCard;