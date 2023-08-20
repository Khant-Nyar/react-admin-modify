import { Admin, EditGuesser, fetchUtils, Login, Resource } from 'react-admin';
import { QueryClient } from '@tanstack/react-query';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './components/users/list';
import { UserCreate } from './components/users/create';
import { PostList } from './components/posts/list';
import { DashBoard } from './components/dashboard';

import './App.css';
import Menu from './layout/Menu';
import authProvider from './authProvider';

import { Layout, LoginPage } from './layout';
import { PostCreate } from './components/posts/create';
import OrderList from './components/orders/OrderList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = (): JSX.Element => (
    <Admin
        title="My Custom Admin"
        loginPage={LoginPage}
        dashboard={DashBoard}
        dataProvider={dataProvider}
        authProvider={authProvider}
        layout={Layout}
    >
        <Menu />
        <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={EditGuesser}
            recordRepresentation="name"
        />

        <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={EditGuesser}
        />
        <Resource name="orders" list={OrderList} />
    </Admin>
);

export default App;
