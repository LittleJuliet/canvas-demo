/* eslint-disable react/jsx-pascal-case */
import { Menu } from "antd";
import { Link } from "react-router-dom";
import routerConfig, { Routers } from '../config/homeMenuRouter';

const { SubMenu } = Menu;

/**
 * 通过路由配置获取菜单栏
 */
function getMenu(routerConfig: Routers[]) {
  return routerConfig.map((item: Routers) => {
    if (item.children) {
      return (
        <SubMenu key={item.name} title={item.name}>
          {
            getMenu(item.children)
          }
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={item.name}>
        <Link to={item.path as string}>{item.name}</Link>
      </Menu.Item>
    )
  })
}

function MyMenu() {
  return (
    <Menu mode="inline" style={{ width: 200 }}>
      {
        getMenu(routerConfig)
      }
    </Menu>
  );
}

export default MyMenu;
