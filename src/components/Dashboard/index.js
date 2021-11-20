import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard({ content }) {
  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => navigate("/")}
            >
              Product
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
              onClick={() => navigate("/add")}
            >
              Add Product
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              {/* {children} */}
              {content}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
