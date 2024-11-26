import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Lívia",
  description: "Aplicação de Front-End_II",
  charset: "UTF-8",
  author: "Lívia Darold Araripe",
  keywords:"HTML, CSS, JS, React, Next.js"

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

