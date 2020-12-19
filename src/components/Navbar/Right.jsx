import React from 'react';
import { Menu, Grid } from 'antd';

const { useBreakpoint } = Grid;

const RightMenu = () => {
    const { md } = useBreakpoint();
    return (
        <Menu theme='dark' mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="mail">
                <a href="/#news">News</a>
            </Menu.Item>
        </Menu>
    );
}

export default RightMenu;