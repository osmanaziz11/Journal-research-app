import { createContext, useContext, useState } from 'react';
import { Comfortaa, Manrope } from 'next/font/google';
const manrope = Manrope({
  subsets: ['latin'],
});
const comfortaa = Comfortaa({
  subsets: ['latin'],
});
const appContext = createContext();
export function useApp() {
  return useContext(appContext);
}
export function Store(props) {
  const [data, setData] = useState({});
  const theme = {
    fonts: {
      primary: manrope.className,
      secondary: comfortaa.className,
    },
  };
  const value = {
    data,
    setData,
    theme,
  };

  return <appContext.Provider value={value} {...props} />;
}
