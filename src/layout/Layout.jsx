import { Layout as AntDLayout } from "antd";
import { useState } from "react";
import { Header, Sidebar } from '../components';
import MainContent from "./MainContent";


const Layout = () => {

    const [selectedMenu, setSelectedMenu] = useState('home');

    const setMenu = (menu) => {
        setSelectedMenu(menu);
    }

    return (
        <AntDLayout style={{
            minHeight: '100vh',
        }}>
            <Sidebar setMenu={setMenu}/>
            <AntDLayout>
                <Header />
                <MainContent menu={selectedMenu}/>
            </AntDLayout>
        </AntDLayout>
    );
}

export default Layout