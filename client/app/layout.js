import {Lora,Roboto, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/generalComponents/Header";
import Footer from "./components/generalComponents/Footer";
import SocialSidebar from "./components/generalComponents/SocialSidebar";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Art Dental",
  description: "Premium Art Dental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${roboto.variable} ${raleway.variable} antialiased`}
      >
        <Header/>
        {children}
        <SocialSidebar/>
        <Footer/>
      </body>
    </html>
  );
}
