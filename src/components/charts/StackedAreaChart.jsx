import { Flex, Typography } from 'antd';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', SalesA: 30, SalesB: 20 },
  { name: 'Feb', SalesA: 20, SalesB: 10 },
  { name: 'Mar', SalesA: 50, SalesB: 20 },
  { name: 'Apr', SalesA: 30, SalesB: 10 },
  { name: 'May', SalesA: 40, SalesB: 20 },
  { name: 'Jun', SalesA: 20, SalesB: 10 },
  { name: 'Jul', SalesA: 30, SalesB: 20 },
  { name: 'Aug', SalesA: 10, SalesB: 10 },
  { name: 'Sep', SalesA: 30, SalesB: 10 },
  { name: 'Oct', SalesA: 40, SalesB: 20 },
  { name: 'Nov', SalesA: 60, SalesB: 40 },
  { name: 'Dec', SalesA: 40, SalesB: 30 },
];

const StackedAreaChart = () => (
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
        Monthly Sales Comparison
      </Typography.Title>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="SalesA" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="SalesB" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  </Flex>
);

export default StackedAreaChart;
