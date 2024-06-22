import { Menu } from 'antd';
import { HomeOutlined, LineChartOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';

interface MenuListComponentProps{
    darkTheme: boolean;
}

const MenuListComponent = ( { darkTheme }: MenuListComponentProps ) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light' } mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined />}
        >
            Home
        </Menu.Item>
        <Menu.Item key="stock-market" icon={<LineChartOutlined />}
        >
            Stock Market
        </Menu.Item>
        <Menu.SubMenu key="tasks" icon={<BarsOutlined/>} title="Tasks">
            <Menu.Item key="task-1">Task 1</Menu.Item>
            <Menu.Item key="task-2">Task 2</Menu.Item>
            <Menu.SubMenu key="subtasks" title="SubTasks">
                <Menu.Item key="subtask-1">SubTask 1</Menu.Item>
                <Menu.Item key="subtask-2">SubTask 2</Menu.Item>
            </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined />}
        >
            Progress
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />}
        >
            Payment
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}
        >
            Setting
        </Menu.Item>
    </Menu>
  )
}

export default MenuListComponent