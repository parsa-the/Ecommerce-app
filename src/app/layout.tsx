import "./globals.css";
import Header from "./components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-[#FAF3E1]"}>
  
          <Header />
          {children}
      
      </body>
    </html>
  );
}
