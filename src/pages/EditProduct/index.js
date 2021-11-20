import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Dashboard } from "../../components";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const EditProduct = () => {
  //API utama
  const rootApi = "https://618f1fd450e24d0017ce1601.mockapi.io";
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  console.log(location);

  // state untuk Form (bawaan ant design)
  const [form] = Form.useForm();

  form.setFieldsValue({
    product_name: location.state.product_name,
    price: location.state.price,
    color: location.state.color,
    department: location.state.department,
  });

  console.log(params);
  const onFinish = async (values) => {
    try {
      const result = await axios({
        method: "PUT",
        url: rootApi + `/products/${params.id_product}`,
        data: values,
      });
      if (result.status === 200) {
        message.success("Success Add Data");
        navigate("/");
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Dashboard
      content={
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              { required: true, message: "Please input your Product Name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: "Please input your Color!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Department"
            name="department"
            rules={[
              { required: true, message: "Please input your Department!" },
            ]}
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
};

export default EditProduct;
