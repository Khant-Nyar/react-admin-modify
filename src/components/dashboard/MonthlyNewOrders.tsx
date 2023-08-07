import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
  value: number;
}

const MonthlyNewOrders = (props: Props) => {
  const { value } = props;
  const translate = useTranslate();
  return (
    <CardWithIcon
      to="/commands"
      icon={ShoppingCartIcon}
      title={translate('Monthly Orders')}
      subtitle={value}
    />
  );
};

export default MonthlyNewOrders;
