import type { Metadata } from 'next'
import Header from './header';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'AMP Puppies',
  description: 'AMP Puppy Finder',
}

export default function RootLayout(props:{
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {props.modal}
      {props.children}
      <Footer />
    </>
  )
}
