import type { Metadata } from "next";
import { Montserrat } from "@next/font/google"
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/QueryClientProvider";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Elderbug's Archive",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-light2 ${montserrat.className} antialiased`} >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
