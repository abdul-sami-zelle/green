import "./globals.css";
import "./style.css";

export const metadata = {
  title: "Green Vine Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
