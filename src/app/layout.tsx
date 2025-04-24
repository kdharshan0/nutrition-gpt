// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Nutrition GPT",
  description: "Your AI food companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
