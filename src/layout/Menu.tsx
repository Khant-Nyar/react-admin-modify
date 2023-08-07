import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from 'react-admin';

import SubMenu from './SubMenu';

type MenuName = 'menuUsers' | 'menuPosts' | 'menuNfts';

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuUsers: true,
    menuPosts: true,
    menuNfts: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    // eslint-disable-next-line no-shadow
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: theme =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle('menuUsers')}
        isOpen={state.menuUsers}
        name="Users"
        icon={<LabelIcon />}
        dense={dense}
      >
        <MenuItemLink
          to="/users"
          state={{ _scrollToTop: true }}
          primaryText={translate(`UserList`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/users/create"
          state={{ _scrollToTop: true }}
          primaryText={translate(`UserCreate`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuPosts')}
        isOpen={state.menuPosts}
        name="Posts"
        icon={<LabelIcon />}
        dense={dense}
      >
        <MenuItemLink
          to="/posts"
          state={{ _scrollToTop: true }}
          primaryText={translate(`PostList`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/posts/create"
          state={{ _scrollToTop: true }}
          primaryText={translate(`PostCreate`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>

      <SubMenu
        handleToggle={() => handleToggle('menuNfts')}
        isOpen={state.menuNfts}
        name="NFT"
        icon={<LabelIcon />}
        dense={dense}
      >
        <MenuItemLink
          to="/nfts"
          state={{ _scrollToTop: true }}
          primaryText={translate(`NFTList`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
        <MenuItemLink
          to="/nft-mint"
          state={{ _scrollToTop: true }}
          primaryText={translate(`NFTmint`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>

      <SubMenu
        handleToggle={() => handleToggle('menuNfts')}
        isOpen={state.menuNfts}
        name="Sales"
        icon={<LabelIcon />}
        dense={dense}
      >
        <MenuItemLink
          to="/orders"
          state={{ _scrollToTop: true }}
          primaryText={translate(`OrderList`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  );
};

export default Menu;
