import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="walletAddress" />
    </SimpleForm>
  </Create>
);
