import { Button, Flex, Form, Input, message, Modal, Table } from 'antd';
import { useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: {
      target: 'full-header',
    },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],

    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDemo] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await formDemo.validateFields();
    message.success('Form submitted successfully!');
    formDemo.resetFields();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    formDemo.resetFields();
    setIsModalOpen(false);
  };
  return (
    <>
      <Flex style={{
        flexDirection: 'column',
      }} gap={20}>
        <Button type="primary" style={{ alignSelf: 'flex-end' }} onClick={showModal}>
          Open Modal
        </Button>
        <Modal okText='Submit' title="Basic Modal with Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            form={formDemo}
            layout='vertical'
            onFinish={handleOk}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          showSorterTooltip={{
            target: 'sorter-icon',
          }}
        />
      </Flex>

    </>
  )
};
export default Users;