import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from 'react-admin';
import { postFilter } from '../filter/postFilter';

export interface Posts {
  id: number;
  title: string;
  body: string;
}

export const PostList = (props: Posts) => (
  <List {...props} filters={postFilter}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
