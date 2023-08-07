import * as React from 'react';
import { useCallback } from 'react';
import {
  DatagridConfigurable,
  DateField,
  DateInput,
  List,
  NullableBooleanInput,
  NumberField,
  ReferenceInput,
  ReferenceField,
  SearchInput,
  TextField,
  TextInput,
  useGetList,
  useListContext,
  TopToolbar,
  SelectColumnsButton,
  FilterButton,
  ExportButton,
} from 'react-admin';
import { Divider } from '@mui/material';

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <ExportButton />
  </TopToolbar>
);

const OrderList = () => (
  <List
    filterDefaultValues={{ status: 'ordered' }}
    sort={{ field: 'date', order: 'DESC' }}
    perPage={25}
    filters={orderFilters}
    actions={<ListActions />}
  >
    <TabbedDatagrid />
  </List>
);

const orderFilters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput source="customer_id" reference="customers" />,
  <DateInput source="date_gte" />,
  <DateInput source="date_lte" />,
  <TextInput source="total_gte" />,
  <NullableBooleanInput source="returned" />,
];

const useGetTotals = (filterValues: any) => {
  const { total: totalOrdered } = useGetList('commands', {
    pagination: { perPage: 1, page: 1 },
    sort: { field: 'id', order: 'ASC' },
  });

  return {
    ordered: totalOrdered,
  };
};

const TabbedDatagrid = () => {
  const listContext = useListContext();
  const { filterValues, setFilters, displayedFilters } = listContext;
  const totals = useGetTotals(filterValues) as any;

  const handleChange = useCallback(
    (event: React.ChangeEvent, value: any) => {
      setFilters &&
        setFilters(
          { ...filterValues, status: value },
          displayedFilters,
          false, // no debounce, we want the filter to fire immediately
        );
    },
    [displayedFilters, filterValues, setFilters],
  );

  return (
    <>
      <Divider />(
      <DatagridConfigurable
        rowClick="edit"
        omit={['total_ex_taxes', 'delivery_fees', 'taxes']}
      >
        <DateField source="date" showTime />
        <TextField source="reference" />
        <ReferenceField
          source="customer_id"
          reference="customers"
          link={false}
          label="resources.commands.fields.address"
        />
        <NumberField
          source="total_ex_taxes"
          options={{
            style: 'currency',
            currency: 'USD',
          }}
        />
        <NumberField
          source="delivery_fees"
          options={{
            style: 'currency',
            currency: 'USD',
          }}
        />
        <NumberField
          source="taxes"
          options={{
            style: 'currency',
            currency: 'USD',
          }}
        />
        <NumberField
          source="total"
          options={{
            style: 'currency',
            currency: 'USD',
          }}
          sx={{ fontWeight: 'bold' }}
        />
      </DatagridConfigurable>
      )
    </>
  );
};

export default OrderList;
