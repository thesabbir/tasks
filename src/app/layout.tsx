import './globals.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import StyledJsxRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Manage your tasks...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
