import "@/src/index.css";

export const metadata = {
  title: "Abdi",
  description: "Personal portfolio of Abdisa Merga - Backend Developer",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-theme">
      <body>
        {children}
      </body>
    </html>
  );
}
