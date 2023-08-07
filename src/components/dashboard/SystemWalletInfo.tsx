/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Avatar,
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import CommentIcon from '@mui/icons-material/Comment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';

import {
  ReferenceField,
  FunctionField,
  useGetList,
  useTranslate,
  useIsDataLoaded,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';

const SystemWalletInfo = () => {
  const translate = useTranslate();

  return (
    <CardWithIcon
      to={{
        pathname: '/reviews',
      }}
      icon={WalletIcon}
      title={translate('System Wallet Info')}
    >
      <CardContent>
        <CardHeader
          avatar={<WalletIcon />}
          title="wallet address"
          subheader="Wallet Address"
        />
        <List>
          <ListItem>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="10SOL" secondary="SOLANA" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="100000" secondary="SPL-TOKEN" />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </CardContent>
      <Box flexGrow={1}>&nbsp;</Box>
      <Button
        sx={{ borderRadius: 0 }}
        component={Link}
        to="/reviews"
        size="small"
        color="primary"
      >
        <Box p={1} sx={{ color: 'primary.main' }}>
          {translate('system wallet transaction')}
        </Box>
      </Button>
    </CardWithIcon>
  );
};

export default SystemWalletInfo;
