import { Layout } from 'antd';
import Home from '../pages/home/Home';
import Users from '../pages/users/Users';
import Payments from '../pages/payments/Payments';

const { Content } = Layout;

const MainContent = ({menu}) => {

    return (
        <Content
            style={{
                padding: '32px 24px',
                minHeight: 280,
            }}
        >
            {
                menu === 'home' ? <Home /> : 
                menu === 'users' ? <Users /> : 
                menu === 'payments' ? <Payments /> : 
                null           
            }
        </Content>
    )
}

export default MainContent