import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Error = () => (
    <Layout className="flex-center">
        <Content style={{ textAlign: 'center' }} >
            <p>Sorry, your requested page not found.</p>
            <Link to="/">
                Click Here to  Go Home
            </Link>
        </Content>
    </Layout>
);




export default Error;