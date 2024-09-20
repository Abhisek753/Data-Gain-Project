"use client";

import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex">
            <Sidebar /> {/* Add Sidebar */}
            <div className="flex-grow">{children}</div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
