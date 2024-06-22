import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './SidebarComponent/LogoComponent';
import MenuListComponent from './SidebarComponent/MenuListComponent';
import ToggleThemeButtonComponent from './SidebarComponent/ToggleThemeButtonComponent';

const { Header, Sider } = Layout;

function App() {
  // 2 pieces of states or State Management
  const [ darkTheme, setDarkTheme ] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider 
           collapsed={collapsed} 
           collapsible
           trigger={null}
           theme={darkTheme ? 'dark' : 'light'} 
           className='sidebar'>
          {/* Logo is stateless component */}
          <Logo></Logo>
          {/* darkTheme is passing as prop */}
          <MenuListComponent darkTheme={darkTheme} />
          {/* toggleTheme function is also passed as prop to toggleTheme */}
          <ToggleThemeButtonComponent darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button 
              type='text'
              className='toggle'
              onClick={() => setCollapsed(!collapsed)} 
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default App