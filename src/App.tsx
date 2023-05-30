import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Elements } from './routes/Routes';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';


const App = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <div>
       <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
       <RouterProvider router={Elements} />
       </MantineProvider>
    </ColorSchemeProvider>
    </div>
  );
}

export default App;
