import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "CarIT",
  description: "Created By Subham",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-black text-white p-4 flex justify-center items-center">
            <div className="container mx-auto  px-4 text-center text-gray-500">
              Made by <a href="https://github.com/Jenisis-03">Subham</a>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
