import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import './styles/menu.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='App'>
      <Layout>
        <Sider
          style={{ height: '100vh' }}
          trigger={null}
          collapsible
          collapsed={collapsed}>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='user' />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='video-camera' />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='upload' />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='trigger'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}>
            Content
          </Content>
          <Footer style={{ textAlign: 'center', marginTop: '-25px' }}>
            Ant Design ©2020 Created by Cassolini
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
