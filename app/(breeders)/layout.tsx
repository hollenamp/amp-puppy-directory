import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AMP Puppies',
  description: 'AMP Puppy Finder',
}

export default function RootLayout(props:{
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {props.modal}
      {props.children}
    </div>
  )
}
