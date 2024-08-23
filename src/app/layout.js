import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sakhawat Portfolio",
    description: "Front-End Developer with react.js and next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <div>
                    {children}
                </div>
                
            </body>
        </html>
    );
}
