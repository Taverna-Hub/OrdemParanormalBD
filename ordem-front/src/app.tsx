import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { GlobalStyles } from './styles/global';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | UMBRA" />
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <GlobalStyles />
              <Toaster
                richColors
                position="top-right"
                toastOptions={{
                  style: {
                    padding: '1.6rem',
                    fontSize: '1.6rem',
                    fontWeight: '700',
                  },
                  duration: 3000,
                  closeButton: true,
                }}
              />
              <RouterProvider router={router} />
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
