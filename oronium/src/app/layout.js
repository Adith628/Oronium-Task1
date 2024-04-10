import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "E-Commerce Store",
  description: "E-Commerce Store by Oronium",
  icons: {
    icon: "/images/oronium.png",
    alt: "Oronium Logo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` h-screen flex flex-col `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
