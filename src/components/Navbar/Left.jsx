import React from 'react';
import { Menu, Grid } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu theme='dark' mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>News Providers</span>}>
        <MenuItemGroup title="General">
          <Menu.Item key="setting:1"><Link to='/abc-news'>ABC News</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link to='/ary-news'>Ary News</Link></Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Technology">
          <Menu.Item key="setting:3"><Link to='/ars-technica'>Ars Technica</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link to='/hacker-news'>Hacker News</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;