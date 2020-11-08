import React, { useEffect, useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

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
    const balances = await api.get(
      `/orders/findTotalBalance?month=${Number(month)}&year=${year}`,
    );

    setReport(balances.data);
  };

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Saldo de vendas por mês</Text> */}
        <Button title="Sair" onPress={signOut} />
        <Text>{report?.amount}</Text>
      </View>
      <View>
        <Picker
          selectedValue={month}
          onValueChange={itemValue => setMonth(itemValue as string)}
          // style={styles.input}
        >
          <Picker.Item label="Mês" value="" />
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
      </View>
      <View>
        <TextInput
          value={year.toString()}
          onChangeText={text => setYear(Number(text))}
          placeholder="Qual o ano?"
          placeholderTextColor="#C1BCCC"
        />
        <RectButton onPress={handleFilter}>
          <Text>Buscar</Text>
        </RectButton>
      </View>
      {/* <FlatList
        data={report?.orders}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{ height: 80, backgroundColor: '#bbb' }}
        renderItem={({ item }) => (
          <>
            <Text>{item.id}</Text>
            <Text>{item.paid}</Text>
            <Text>{item.total_amount}</Text>
          </>
        )}
      /> */}
      <Container>
        <ProductContainer>
          <ProductList
            data={report?.orders}
            keyExtractor={item => item.id}
            ListHeaderComponent={<View />}
            ListHeaderComponentStyle={{
              height: 80,
            }}
            renderItem={({ item }) => (
              <Product>
                {/* <ProductImage source={{ uri: item.image_url }} /> */}
                <ProductTitle>{item.updated_at}</ProductTitle>
                <PriceContainer>
                  <ProductPrice>{item.total_amount}</ProductPrice>
                  {/* <ProductButton
                  testID={`add-to-cart-${item.id}`}
                  onPress={() => handleAddToCart(item)}
                > */}
                  {/* <FeatherIcon size={20} name="plus" color="#C4C4C4" /> */}
                  {/* </ProductButton> */}
                </PriceContainer>
              </Product>
            )}
          />
        </ProductContainer>
        {/* <FloatingCart /> */}
      </Container>
    </>
  );
};

export default Dashboard;
