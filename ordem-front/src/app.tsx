import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { GlobalStyles } from './styles/global';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | OP" />
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
