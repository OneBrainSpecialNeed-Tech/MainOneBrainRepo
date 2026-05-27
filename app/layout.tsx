import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rubik = Rubik({ 
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: 'מוח אחד | פרויקט משולב טכנולוגיה וחינוך מיוחד',
  description: 'פרויקט סמינריון המחבר בין תלמידי טכנולוגיה לתלמידי חינוך מיוחד - יצירת משחקים חינוכיים יחד',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className="bg-background">
      <body className={`${rubik.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
