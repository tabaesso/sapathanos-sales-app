/* eslint-disable @typescript-eslint/ban-types */
import api from './api';

interface userDTO {
  email: string;
  password: string;
}

interface customerAuthenticated {
  tokenCustomer: string;
  customer: object;
}

interface sellerAuthenticated {
  tokenSeller: string;
  seller: object;
}

export const signInCustomer = async ({
  email,
  password,
}: userDTO): Promise<customerAuthenticated> => {
  const response = await api.post('login/clienteLogin', { email, password });

  const { token, customer } = response.data;

  const customerAuth = { tokenCustomer: token, customer };

  return customerAuth;
};

export const signInSeller = async ({
  email,
  password,
}: userDTO): Promise<sellerAuthenticated> => {
  const response = await api.post('login/vendedorLogin', { email, password });
  const { token, seller } = response.data;

  const sellerAuth = { tokenSeller: token, seller };

  return sellerAuth;
};
