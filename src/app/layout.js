import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sakhawat | React Dev",
    description: "Front-End Developer with react.js and next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div>
                    {children}
                </div>
                
            </body>
        </html>
    );
}
