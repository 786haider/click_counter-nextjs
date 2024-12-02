
import "./globals.css";

export const metadata = {
  title: "click_counter",
  description: "Create By haider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
