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
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
   const { locale } = await params;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

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
