import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Order {
  id: string;
  customer_id: string;
  total_amount: number;
  paid: boolean;
  created_at: Date;
  updated_at: Date;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList as new () => FlatList<Order>).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #9b51e0;
`;

export const ProductButton = styled.TouchableOpacity``;
