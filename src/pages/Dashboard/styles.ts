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
  font-weight: bold;
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

export const TotalContainer = styled.View`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #9b51e0;

  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalBalanceReport = styled.Text`
  padding: 20px;
`;

export const TotalBalance = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const LogoutButton = styled.View`
  flex-direction: row;
  background: #9b51e0;

  flex: 1;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  margin-left: 15px;
  flex: 1;
  margin-right: auto;
`;

export const SearchReportContainer = styled.View`
  margin-bottom: -25px;
`;

export const SearchLabel = styled.Text`
  color: #b47de8;
  font-family: 'Quicksand_400Regular';
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchInputBlockRow = styled.View`
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  height: 54px;
  background-color: #fff;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const SearchSubmitButton = styled.TouchableOpacity`
  background-color: #9b51e0;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchSubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Quicksand_700Bold';
  font-size: 16px;
`;
