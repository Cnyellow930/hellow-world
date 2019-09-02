import React from 'react';
import { Layout as Lay } from 'antd';
import './Layout.css';

const { Header, Footer, Sider, Content } = Lay;

function Layout() {
    return (
        <Lay className="mainContainer">
            <Header>Header</Header>
            <Lay>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Lay>
            <Footer>Footer</Footer>
        </Lay>
    )
}
export default Layout