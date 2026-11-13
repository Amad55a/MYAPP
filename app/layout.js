import "./globals.css";

export const metadata = {
  title: "DevOps World | Build. Automate. Deploy. Scale.",
  description:
    "Explore DevOps careers, cloud infrastructure, essential tools, Linux administration, and a practical learning roadmap.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
