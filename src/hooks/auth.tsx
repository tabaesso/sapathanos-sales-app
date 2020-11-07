/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/authentication';

interface AuthStateCustomer {
  tokenCustomer: string;
  customer: object;
}

interface AuthStateSeller {
  tokenSeller: string;
  seller: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  customer?: object;
  seller?: object;
  loading: boolean;
  signInCustomer(credentials: SignInCredentials): Promise<void>;
  signInSeller(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContextData = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [customerAuth, setCustomerAuth] = useState<AuthStateCustomer>(
    {} as AuthStateCustomer,
  );
  const [sellerAuth, setSellerAuth] = useState<AuthStateSeller>(
    {} as AuthStateSeller,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [
        tokenCustomer,
        customer,
        tokenSeller,
        seller,
      ] = await AsyncStorage.multiGet([
        '@Sapathanos:tokenCustomer',
        '@Sapathanos:customer',
        '@Sapathanos:tokenSeller',
        '@Sapathanos:seller',
      ]);

      // const [tokenSeller, seller] = await AsyncStorage.multiGet([
      //   '@Sapathanos:tokenSeller',
      //   '@Sapathanos:seller',
      // ]);

      if (tokenCustomer[1] && customer[1]) {
        setCustomerAuth({
          tokenCustomer: tokenCustomer[1],
          customer: JSON.parse(customer[1]),
        });
      } else if (tokenSeller[1] && seller[1]) {
        setSellerAuth({
          tokenSeller: tokenSeller[1],
          seller: JSON.parse(seller[1]),
        });
      }

      setLoading(false);
    }

    loadStoragedData();

    // setLoading(false);
  }, []);

  const signInCustomer = useCallback(async ({ email, password }) => {
    const { tokenCustomer, customer } = await auth.signInCustomer({
      email,
      password,
    });

    await AsyncStorage.multiSet([
      ['@Sapathanos:tokenCustomer', tokenCustomer],
      ['@Sapathanos:customer', JSON.stringify(customer)],
    ]);

    setCustomerAuth({ tokenCustomer, customer });
  }, []);

  const signInSeller = useCallback(async ({ email, password }) => {
    const { tokenSeller, seller } = await auth.signInSeller({
      email,
      password,
    });

    await AsyncStorage.multiSet([
      ['@Sapathanos:tokenSeller', tokenSeller],
      ['@Sapathanos:seller', JSON.stringify(seller)],
    ]);

    setSellerAuth({ tokenSeller, seller });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Sapathanos:tokenCustomer',
      '@Sapathanos:customer',
      '@Sapathanos:tokenSeller',
      '@Sapathanos:seller',
      '@Sapathanos:cart'
    ]);

    setCustomerAuth({} as AuthStateCustomer);
    setSellerAuth({} as AuthStateSeller);
  }, []);

  return (
    <AuthContextData.Provider
      value={{
        customer: customerAuth,
        seller: sellerAuth,
        loading,
        signInCustomer,
        signInSeller,
        signOut,
      }}
    >
      {children}
    </AuthContextData.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContextData);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
