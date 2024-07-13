import { Flex, Typography } from 'antd';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  { name: 'Jan', Sales: 50 },
  { name: 'Feb', Sales: 30 },
  { name: 'Mar', Sales: 70 },
  { name: 'Apr', Sales: 40 },
  { name: 'May', Sales: 60 },
  { name: 'Jun', Sales: 30 },
  { name: 'Jul', Sales: 50 },
  { name: 'Aug', Sales: 20 },
  { name: 'Sep', Sales: 40 },
  { name: 'Oct', Sales: 60 },
  { name: 'Nov', Sales: 100 },
  { name: 'Dec', Sales: 70 },
];

const Chart = () => (
  <Flex style={{
    margin: '16px 0',
    border: '2px solid #e8e8e8',
    borderRadius: '16px',
    padding: '16px',
    flex: 1,
    minWidth: 0,
    height: '400px'
  }}>
    <Flex style={{ flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Typography.Title level={4} style={{ margin: '0 0 16px 0' }}>
        Monthly Sales Performance
      </Typography.Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis fontSize={12} dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Tooltip />
          <Bar dataKey="Sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  </Flex>
);

export default Chart;
