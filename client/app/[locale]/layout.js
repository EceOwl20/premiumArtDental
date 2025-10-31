import {Lora,Roboto, Raleway } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
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
   other: {
    "facebook-domain-verification": "ymrl8538ch71mha0t07xoiv9x1wjtw",
  },
icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.png?v=4", sizes: "512x512", type: "image/png" },
      { url: "/favicon.png?v=4", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png?v=4", sizes: "512x512", type: "image/png" }],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
   const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
     setRequestLocale(locale)
  const messages = await getMessages();

       

  return (
    <html lang={locale}>
      <body
        className={`${lora.variable} ${roboto.variable} ${raleway.variable} antialiased `}
      >
         <NextIntlClientProvider locale={locale} messages={messages}>
        <Header/>
        {children}
        <SocialSidebar/>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
