import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
});

export const metadata = {
  // metadataBase: new URL('/'),
  title:
    "Experienced HR Executive and Admin - Jeleshia Biyanka Lobo | HR & Corporate Services Professional in Dubai",
  description:
    "Meet Jeleshia Biyanka Lobo, a skilled HR Executive and Admin with extensive experience in recruitment, employee relations, and HR policy development. Based in Dubai, Jeleshia is proficient in enhancing employee engagement, managing HRIS, and ensuring compliance with industry standards. Connect with a dedicated HR professional who excels in fostering positive work environments and driving continuous improvement in HR practices",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Experienced HR Executive and Admin - Jeleshia Biyanka Lobo | HR & Corporate Services Professional in Dubai",
    description:
      "Meet Jeleshia Biyanka Lobo, a skilled HR Executive and Admin with extensive experience in recruitment, employee relations, and HR policy development. Based in Dubai, Jeleshia is proficient in enhancing employee engagement, managing HRIS, and ensuring compliance with industry standards. Connect with a dedicated HR professional who excels in fostering positive work environments and driving continuous improvement in HR practices",
    // images: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
