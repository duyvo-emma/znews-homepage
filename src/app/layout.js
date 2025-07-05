import { Container } from '@mui/material';
import { Header } from './components/Header';
import './globals.css';
import { getHeaderData } from './lib/api';

export const metadata = {
  title: 'My App',
  description: 'Base layout for app',
};

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen items-center bg-white">
        <Header data={headerData} />

        <Container maxWidth="lg" sx={{ backgroundColor: '#fff', minHeight: '100vh', mt: 8 }}>
          {children}
        </Container>

        <footer className="bg-gray-900 text-gray-300 p-4 text-center w-full">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
