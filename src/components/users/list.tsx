import { useState } from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';
import { postFilter } from '../filter/postFilter';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const UserList = (props: User) => (
  <List {...props} filters={postFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="website" />
      <EditButton />
    </Datagrid>
  </List>
);
