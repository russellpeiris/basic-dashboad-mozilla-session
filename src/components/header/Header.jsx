import { Avatar, Layout, theme } from 'antd';
import Search from 'antd/es/input/Search';

const { Header: AntDHeader } = Layout

const Header = () => {

    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <AntDHeader
            style={{
                padding: '0 24px 0 0',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: colorBgContainer,
                borderBottom: '2px solid #e8e8e8',
            }}
        >
            <Search placeholder="Search" style={{ width: 250, paddingRight: '16px' }} />
            <Avatar 
                style={{
                    border: '2px solid #e8e8e8',
                    cursor: 'pointer',
                }}
                size={40}
                src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                alt='User'
            />
        </AntDHeader>
    )
}

export default Header