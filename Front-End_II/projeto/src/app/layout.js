import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
 
export const metadata = {
  title: "Minha primeira aplicação",
  description: "Aplicação de Front-end II",
  charset: 'UTF-8',
  author: 'Lívia Darold',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
