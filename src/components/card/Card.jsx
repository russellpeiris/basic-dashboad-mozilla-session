import { Card as AntDCard, Avatar, Flex, Typography } from 'antd';

const Card = (props) => {

    const { label, icon, amount, color } = props;

    return (
        <AntDCard style={{
            width: '300px',
            border: '2px solid #e8e8e8',
            height: '130px',
            display: 'flex',
            alignItems: 'center',
        }} >
            <Flex align='center'>
                <Avatar
                    style={{
                        backgroundColor: color,
                        verticalAlign: 'middle',
                    }}
                    size={40}
                    icon={icon}
                />
                <Flex style={{
                    flexDirection: 'column',
                    marginLeft: 16,
                }}>
                    <Typography.Title level={4} style={{ margin: '0' }}>{amount}</Typography.Title>
                    <Typography.Text type="secondary">{label}</Typography.Text>
                </Flex>
            </Flex>
        </AntDCard>
    )
}

export default Card