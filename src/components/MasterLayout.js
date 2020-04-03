import React from 'react'
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../redux/constants';

const MasterLayout = props => {

    const dispatch = useDispatch();
    const history = useHistory()

    const logout = () => {
        dispatch({ type: LOGOUT_USER });
        history.replace("/login")
    }


    return (
        <Layout>
            <Layout.Header>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item>
                        <Link to="/" >Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/lists" >Lists</Link>
                    </Menu.Item>
                    <Menu.Item className="pull-right" onClick={() => logout()}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content>
                {props.children}
            </Layout.Content>
            <Layout.Footer></Layout.Footer>
        </Layout>
    )
}

export default MasterLayout;