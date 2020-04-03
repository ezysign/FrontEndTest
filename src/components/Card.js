import React from 'react'
import { List, Divider, Row, Col } from 'antd';

const Card = ({ data }) => {

    return (
        <Row align="middle">
            <Col span={6} offset={6}>
                <List header={<h1>Data From API</h1>} dataSource={data} renderItem={item => (
                    <div>
                        <List.Item.Meta
                            title={item.name}
                            description={item.year}
                        />
                        <Divider orientation="left" style={{ width: '50%' }} />
                    </div>

                )} />
            </Col>
        </Row>
    )
}

export default Card;