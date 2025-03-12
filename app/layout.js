import Header from "../components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter=Inter({subsets:["Latin"]});

export const metadata = {
  title: "AuraNotes",
  description: "Capture moods, write freely",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
       className={`${inter.className}`}>
        <div className="inset-0 bg-[url('/bg.png')] opacity-50 fixed -z-10" />
        <Header/>
        <main className="min-h-screen">{children}</main>
        

        <footer className="bg-purple-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
             <h3>Powered by @AuraNotes</h3>
            </div>
          </footer>
     
      </body>
    </html>
    </ClerkProvider>
  );
}
