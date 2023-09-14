import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { ColorModeScript } from '@chakra-ui/react'


import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import theme from './theme';

const customTheme = extendTheme(theme); // Создаем расширенную тему
console.log("▶ ⇛ customTheme:", customTheme);
const root = ReactDOM.createRoot(document.getElementById('root'));

function RootComponent() {
  const colorModeFromLocal = localStorage.getItem('chakra-ui-color-mode');
  const [initialColorMode, setInitialColorMode] = useState(colorModeFromLocal); // Значение по умолчанию (например, светлая тема)

  useEffect(() => {
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode');
    if (savedColorMode) {
      setInitialColorMode(savedColorMode);
    }
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider theme={{ ...customTheme, config: { initialColorMode } }}>
        {/* <ColorModeScript /> */}
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

root.render(<RootComponent />);


