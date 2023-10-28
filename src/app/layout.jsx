import { Providers } from '../providers/providers';
import '../styles/globals.css';

export const metadata = {
  title: 'Documentation Prework Setup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
