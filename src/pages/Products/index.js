import { DashOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../components";

export default function Product() {
  const navigate = useNavigate();

  //API Utama
  const rootApi = "https://618f1fd450e24d0017ce1601.mockapi.io";

  const [listProducts, setListProducts] = useState([]);
  const [triggered, setTriggered] = useState(0);
  //dijalankan ketika pertama kali di render dan  ketika komponen di update
  useEffect(() => {
    // fungsi untuk mengambil data products
    async function fetchData() {
      try {
        const response = await axios({
          url: rootApi + "/products",
          method: "GET",
        });
        setListProducts(response.data);
      } catch (error) {
        message.error(error.message);
      }
    }
    // menajalankan fungsi fetchData
    fetchData();
  }, [triggered]);

  const columns = [
    { title: "Product Name", dataIndex: "product_name", key: "product_name" },
    { title: "Color", dataIndex: "color", key: "color" },
    { title: "Department", dataIndex: "department", key: "department" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return <p style={{ color: "red" }}>{`USD ${price}`}</p>;
      },
    },
    {
      title: "Action",
      render: (record) => {
        console.log(record);
        return (
          <Dropdown overlay={menu(record)}>
            <DashOutlined />
          </Dropdown>
        );
      },
    },
  ];

  async function handleDelete(id) {
    try {
      await axios({
        url: rootApi + `/products/${id}`,
        method: "DELETE",
      });
      message.success("Delete Success");
      setTriggered(triggered + 1);
    } catch (error) {
      message.error(error.message);
    }
  }
  // menajalankan fungsi fetchData

  //   async function handleDelete(id) {
  //     axios({
  //       url: rootApi + `/products/${id}`,
  //       method: "DELETE",
  //     })
  //       .then(() => {
  //         message.success("Delete Success");
  //         setTriggered(triggered + 1);
  //       })
  //       .catch((error) => message.error(error.message));
  //   }

  const menu = (record) => {
    return (
      <Menu>
        <Menu.Item
          style={{ color: "red" }}
          onClick={() => handleDelete(record.id)}
        >
          <DeleteOutlined />
          Hapus
        </Menu.Item>
        <Menu.Item
          style={{ color: "blue" }}
          onClick={() =>
            navigate(`/edit/${record.id}`, {
              state: {
                product_name: record.product_name,
                price: record.price,
                color: record.color,
                department: record.department,
              },
            })
          }
        >
          <EditOutlined />
          Edit
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <Dashboard
      content={
        <Table
          columns={columns}
          dataSource={listProducts}
          loading={listProducts.length === 0 ? true : false}
        />
      }
    />
  );
}
