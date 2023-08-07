import { List, Datagrid, TextField } from 'react-admin';

export interface NFT {
  name: string;
  SYMBOL: string;
  description: string;
  royalty: number;
}

export const NFTList = (props: NFT) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="SYMBOL" />
      <TextField source="description" />
      <TextField source="royalty" />
    </Datagrid>
  </List>
);
