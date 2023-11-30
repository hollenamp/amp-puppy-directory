
import { ScrollToTop } from '@/components/ScrollTo';
import './globals.css'
import { Bevan, Poppins } from 'next/font/google'
import { ArrowUpToLine } from 'lucide-react';

const bevan = Bevan({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bevan',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600'],
  subsets: ['latin'],
  // variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bevan.variable}`}>
      <body className={poppins.className}>
        <div id='topOfPage' className='absolute -top-96' tabIndex={1} />
        {children}
        <ScrollToTop href="#topOfPage">
          <ArrowUpToLine />
        </ScrollToTop>
      </body>
    </html>
  )
}
