import Header from '../components/Header';
import './styles/globals.scss';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-base bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
