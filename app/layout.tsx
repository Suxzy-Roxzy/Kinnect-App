import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Comme, Courier_Prime, Google_Sans} from "next/font/google";
import "./globals.css";

const commeSans = Comme({
  variable: "--font-comme",
  subsets:['latin']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight:["400"]
});

const googleSans = Google_Sans({
  variable: "--font-google",
  subsets: ["latin"],
  weight:["400"]
});

export const metadata: Metadata = {
  title: "Kinnects App",
  description: "An online directory used to remain connected with far away relations and close individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} ${googleSans.variable} ${commeSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
