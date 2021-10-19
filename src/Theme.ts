import { createContext } from 'react';

interface ThemeProps {
  primary: {
    background: string;
    color: string;
  };
  secondary: {
    background: string;
    color: string;
  };
  token: string;
}

export const theme: ThemeProps = {
  primary: {
    background: '#000',
    color: '#efefef',
  },
  secondary: {
    background: '#efefef',
    color: '#000',
  },
  token: '',
};

export const ThemeContext = createContext({} as ThemeProps);
