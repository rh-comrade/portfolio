'use client'
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

import "./globals.css";
import { Header } from "@/header";
import { Footer } from "@/footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(()=>{
    if (typeof window !== "undefined") {
      // import("jquery/dist/jquery.js")
      import("bootstrap/dist/js/bootstrap.bundle.js");
    }
},[])
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
