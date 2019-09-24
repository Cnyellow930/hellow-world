import React from 'react';
import { Layout as Lay } from 'antd';
import './Layout.css';
import Header from './Header';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import Footer from './Footer';

function Layout() {
    return (
        <Lay className="main-container">
            <Header></Header>
            <Lay className="content-lay">
                <SideBar></SideBar>
                <MainContainer></MainContainer>
            </Lay>
            <Footer></Footer>
        </Lay>
    )
}
export default Layout