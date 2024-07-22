import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Dashboard from "@/components/Dashboard";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A Chai-Fund your project with chai",
  description: "This website is a crowdfunding plateform for creaters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      
       <SessionWrapper>
       <Navbar/>
       <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
       {children}
       </div>
        <Footer/>
        </SessionWrapper>
       
        </body>
    </html>
  );
}