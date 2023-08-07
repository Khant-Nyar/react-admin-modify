import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="mailAddress" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
