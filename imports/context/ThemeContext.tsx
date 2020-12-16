import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../ui/themes';

type ThemeContextType = {
  themeMode: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

type ThemeStoreProps = {
  children: React.ReactNode;
};

const ThemeStore = ({ children }: ThemeStoreProps) => {
  const [themeMode, setThemeMode] = React.useState(
    localStorage.getItem('theme') || 'dark'
  );

  React.useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === 'dark') {
        return 'light';
      } else {
        return 'dark';
      }
    });
  };

  const value = { themeMode, toggleTheme };
  const myTheme = theme[themeMode];

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeContext, ThemeStore, useTheme };
