import {
    HomeFilled,
    PayCircleFilled,
    UserOutlined
} from '@ant-design/icons';
import { Flex, Image, Menu, theme, Typography } from "antd";
import Sider from "antd/es/layout/Sider";

const Sidebar = () => {

    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Sider style={{
            backgroundColor: colorBgContainer,
            borderRight: '2px solid #e8e8e8',
        }}>
            <Flex style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: '32px 0',
            }}>
                <Image
                    src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                    preview={false}
                    height={40}
                />
                <Typography.Title
                    level={5}
                    style={{
                        color: 'black',
                        margin: '0 0 0 16px',
                    }}
                > Ant Design </Typography.Title>
            </Flex>
            <Menu
                style={{
                    marginTop: 16,
                    border: 'none',
                }}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <HomeFilled />,
                        label: 'Home',
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: 'Users',
                    },
                    {
                        key: '3',
                        icon: <PayCircleFilled />,
                        label: 'Payments',
                    },
                ]}
            />
        </Sider>
    )
}

export default Sidebar