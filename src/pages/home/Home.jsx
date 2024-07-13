import { PayCircleFilled, ProductFilled, StockOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { Card } from "../../components";
import Chart from '../../components/charts/Chart';
import StackedAreaChart from '../../components/charts/StackedAreaChart';

const Home = () => {

    const cardItems = [
        {
            label: "Total Users",
            icon: <UserOutlined />,
            amount: 89,
            color: "#1890ff",
        },
        {
            label: "Total Revenue",
            icon: <PayCircleFilled />,
            amount: 'LKR 130400',
            color: "#01a460",
        },
        {
            label: "Total Products",
            icon: <ProductFilled />,
            amount: 1120,
            color: "#f9a220",
        },
        {
            label: "Total Sales",
            icon: <StockOutlined />,
            amount: 320,
            color: "#a401a4",
        }

    ]

    return (
        <Col>
          <Row>
            <Col span={24}>
              <Typography.Title level={2} style={{ margin: '0' }}>
                Welcome back, John Doe
              </Typography.Title>
              <Typography.Text type="secondary">
                Here's what's happening with your store today.
              </Typography.Text>
            </Col>
          </Row>
    
          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            {cardItems.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={6}>
                <Card {...item} />
              </Col>
            ))}
          </Row>
    

              <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                  <Chart />
                </Col>
                <Col xs={24} lg={12}>
                  <StackedAreaChart />
                </Col>
              </Row>
        </Col>
      );
}

export default Home