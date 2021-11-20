import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Dashboard } from "../../components";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const rootApi = "https://618f1fd450e24d0017ce1601.mockapi.io"
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const result = await axios({
        method:'POST',
        url: rootApi + "/products",
        data: values,
      })
      if(result.status === 201){
      message.success("Success Add Data")
      navigate('/')
      } 
    } catch (error) {
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Dashboard content={<Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Product Name"
        name="product_name"
        rules={[{ required: true, message: 'Please input your Product Name!' }]}
      >
        <Input />
      </Form.Item>  
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input your Price!' }]}
      >
        <Input />
      </Form.Item>  
      <Form.Item
        label="Color"
        name="color"
        rules={[{ required: true, message: 'Please input your Color!' }]}
      >
        <Input />
      </Form.Item>  
      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: 'Please input your Department!' }]}
      >
        <Input />
      </Form.Item>  

      <Form.Item wrapperCol={{ offset: 18, span: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    }
    />
  );
}
    

export default AddProduct;
