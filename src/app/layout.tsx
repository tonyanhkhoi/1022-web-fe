import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: 'Tổng đài dịch vụ công 1022',
  description: 'Tổng đài dịch vụ công 1022 - Thông tin chính xác, kịp thời',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}