import "./globals.css";


export const metadata = {
  title: "Projeto Clínica Darold",
  description: "Projeto de Front-End II",
  charset:'UTF-8',
  author:'Lívia Darold',
  keywords:'Html, Css, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}