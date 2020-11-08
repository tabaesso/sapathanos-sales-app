import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  TotalContainer,
  LogoutButton,
  LogoutButtonText,
  TotalBalanceReport,
  TotalBalance,
  SearchInput,
  SearchInputBlockRow,
  SearchInputContainer,
  SearchLabel,
  SearchReportContainer,
  SearchSubmitButton,
  SearchSubmitButtonText,
} from './styles';
import formatValue from '../../utils/formatValue';

interface OrderDTO {
  id: string;
  customer_id: string;
  total_amount: number;
  paid: boolean;
  created_at: Date;
  updated_at: Date;
}

interface TotalBalanceDTO {
  orders: OrderDTO[];
  amount: number;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const [report, setReport] = useState<TotalBalanceDTO>();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  const handleFilter = async () => {
    if (month === '' || year === 0) {
      Alert.alert(
        'Dados incompletos',
        'Por favor preencha os demais campos para obter o relatório',
      );
    }

    const balances = await api.get(
      `/orders/findTotalBalance?month=${Number(month)}&year=${year}`,
    );

    setReport(balances.data);
  };

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Sair" onPress={signOut} />
      </View>
      <SearchReportContainer>
        <SearchLabel>Mês de vendas</SearchLabel>
        <Picker
          selectedValue={month}
          onValueChange={itemValue => setMonth(itemValue as string)}
          style={styles.input}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Jan" value="1" />
          <Picker.Item label="Fev" value="2" />
          <Picker.Item label="Mar" value="3" />
          <Picker.Item label="Abr" value="4" />
          <Picker.Item label="Mai" value="5" />
          <Picker.Item label="Jun" value="6" />
          <Picker.Item label="Jul" value="7" />
          <Picker.Item label="Ago" value="8" />
          <Picker.Item label="Set" value="9" />
          <Picker.Item label="Out" value="10" />
          <Picker.Item label="Nov" value="11" />
          <Picker.Item label="Dez" value="12" />
        </Picker>

        <SearchInputContainer>
          <SearchInputBlockRow>
            <SearchLabel>Selecione o ano de vendas</SearchLabel>
            <SearchInput
              value={year.toString()}
              onChangeText={text => setYear(Number(text))}
              placeholder="Qual o ano?"
              placeholderTextColor="#C1BCCC"
            />
          </SearchInputBlockRow>
        </SearchInputContainer>
        <SearchSubmitButton onPress={handleFilter}>
          <SearchSubmitButtonText>Buscar</SearchSubmitButtonText>
        </SearchSubmitButton>
      </SearchReportContainer>
      <Container>
        <ProductContainer>
          <ProductList
            data={report?.orders}
            keyExtractor={item => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }) => (
              <Product>
                <ProductTitle>
                  {item.updated_at
                    ? new Date(item.updated_at).toLocaleDateString()
                    : '-'}
                </ProductTitle>
                <PriceContainer>
                  <ProductPrice>{formatValue(item.total_amount)}</ProductPrice>
                </PriceContainer>
              </Product>
            )}
          />
        </ProductContainer>
        <TotalContainer>
          <LogoutButton>
            <MaterialCommunityIcons
              name="square-inc-cash"
              size={24}
              color="#fff"
            />
            <LogoutButtonText>Total vendido no mês</LogoutButtonText>
          </LogoutButton>
          <TotalBalanceReport>
            {report?.amount ? (
              <TotalBalance>{formatValue(report?.amount)}</TotalBalance>
            ) : (
              <TotalBalance>R$ -</TotalBalance>
            )}
          </TotalBalanceReport>
        </TotalContainer>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 54,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
});

export default Dashboard;
