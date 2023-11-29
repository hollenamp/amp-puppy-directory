import ApplicationLogo from '@/components/ApplicationLogo'
import { Card } from '@/components/card'
import Link from 'next/link'

export default function Home() {
  const hostname = process.env.NEXT_PUBLIC_FRONTEND_URL
  
  const clients = [
    {subdomain:'donnawagler', title:"Wagler Kennels"},
    {subdomain:'irishhillsfarmllc', title:"Irish Hills Farm llc"},
    {subdomain:'teresasmith', title:"Walnutridge Kennels"} 
  ]

  return (
    <div className="w-full flex flex-col items-center bg-[url('/images/login-bg.jpg')] bg-cover bg-center min-h-screen">
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <div className='pb-2'>
                <ApplicationLogo className="w-40 m-auto" alt='AMP Puppies Logo' />
            </div>
            <Card color='white' radius='lg' className='w-full max-w-sm'>
                <Card.Head className='text-center'>
                      <h2 className='text-zinc-800 dark:text-white text-2xl'>AMP Directory</h2>
                      <p>List of subdomain links</p>
                </Card.Head>
                <Card.Body>
                  <ul>
                    <>
                      { clients.map((client) => {
                        const url = hostname!.replace(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, `${client.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
                        return (
                        <li key={client.subdomain}>
                          <Link href={url} className=' text-lime-500'>{client.title}</Link>
                        </li>
                        )
                      })}
                    </>
                  </ul>
                  <div>
                    <Link href='/signup' className='text-lime-500'>Signup</Link>
                  </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}
