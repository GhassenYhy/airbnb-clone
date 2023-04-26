import { Nunito } from "next/font/google";

import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import Modal from "@/app/components/modals/Modal";
import RegisterModal from "@/app/components/modals/RegisterModal";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <RegisterModal/>
      <Navbar/>
      {children}</body>
    </html>
  )
}
