import { Layout as AntDLayout } from "antd";
import { Header, Sidebar } from '../components';
import MainContent from "./MainContent";


const Layout = () => {

    return (
        <AntDLayout style={{
            height: '100vh',
        }}>
            <Sidebar />
            <AntDLayout>
                <Header />
                <MainContent />
            </AntDLayout>
        </AntDLayout>
    );
}

export default Layout