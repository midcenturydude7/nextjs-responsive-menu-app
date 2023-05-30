import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
});

export const metadata = {
  title: "mg[dev] Portfolio Site | Responsive Menu App",
  description:
    "Mock-up of responsive menu app for mg[dev] portfolio site. Built with Next.js, React, and React Icons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
