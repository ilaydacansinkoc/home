import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import './styles/menu.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Sider
          width='250px'
          style={{ height: '100vh' }}
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
            <Menu.Item key='1'>
              <Icon type='user' />
              <span className='nav-text'>nav aaaaaaaaaaaaaaaaaaa1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='video-camera' />
              <span className='nav-text'>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='upload' />
              <span className='nav-text'>nav 3</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type='user' />
              <span className='nav-text'>nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Menu
              theme='light'
              mode='horizontal'
              defaultSelectedKeys={['2']}
              style={{
                lineHeight: '64px',
                textAlign: 'right',
                paddingRight: '15px'
              }}>
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
