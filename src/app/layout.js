import { CartProvider } from "../context/addToCart";
import "./globals.css";
import "./style.css";
import Loader from "../components/Loader/Loader";

export const metadata = {
  title: "Delco Farmers Market",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Loader>
            <main className="site-main">{children}</main>
          </Loader>
        </CartProvider>
      </body>
    </html>
  );
}
