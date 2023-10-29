import { Encode_Sans } from 'next/font/google';
import { Providers } from '../providers/providers';
import '../styles/globals.css';

// HTML metadata
export const metadata = {
  title: 'Documentation Prework Setup',
};

// Font Settings
const encodeSans = Encode_Sans({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={encodeSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
