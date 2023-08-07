import { Layout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

export const layout = (props: LayoutProps) => (
  <Layout {...props} appBar={AppBar} menu={Menu} />
);

export default layout;
