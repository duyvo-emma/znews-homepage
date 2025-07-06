import { Container } from '@mui/material';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './globals.css';
import { getFooterData, getHeaderData } from './lib/api';

export const metadata = {
  title: 'Znews - Thông tin uy tín, hình ảnh ấn tượng - ZNEWS.VN',
  description: 'Znews - Thông tin uy tín, hình ảnh ấn tượng - ZNEWS.VN',
};

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen items-center bg-white">
        <Header data={headerData} />

        <Container
          maxWidth={false}
          sx={{ backgroundColor: '#fff', minHeight: '100vh', mt: 8 }}
          className="!px-0"
        >
          {children}
        </Container>

        <Footer data={footerData} />
      </body>
    </html>
  );
}
