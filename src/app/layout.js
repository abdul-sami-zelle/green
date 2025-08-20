
import { CartProvider } from "../context/addToCart";

import "./globals.css";
import "./style.css";

export const metadata = {
  title: "Delco Farmers Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <main className="site-main">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
