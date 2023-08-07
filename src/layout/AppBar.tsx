import * as React from 'react';
import { AppBar, Logout, UserMenu, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';
import {
  Box,
  MenuItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
  Theme,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const ConfigurationMenu = React.forwardRef((props, ref) => {
  const translate = useTranslate();
  return (
    <MenuItem
      component={Link}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      {...props}
      to="/configuration"
    >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
    </MenuItem>
  );
});
const CustomUserMenu = () => (
  <UserMenu>
    <Logout />
  </UserMenu>
);

const CustomAppBar = (props: any) => {
  const isLargeEnough = useMediaQuery<Theme>(theme =>
    theme.breakpoints.up('sm'),
  );
  return (
    <AppBar
      {...props}
      color="secondary"
      elevation={1}
      userMenu={<CustomUserMenu />}
    >
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          flex: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        id="react-admin-title"
      />
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
