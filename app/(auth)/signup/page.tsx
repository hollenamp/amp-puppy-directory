import { Suspense } from 'react';
import { Card } from '@/components/card';
import SignupForm from './signup';
import ApplicationLogo from '@/components/ApplicationLogo';

export default function Signup() {
  return (
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <div className='pb-2'>
            <ApplicationLogo alt='AMP Logo' className="w-40 m-auto" />
        </div>
        <Card color='white' radius='lg' className='w-full max-w-sm'>
            <Card.Head className='text-center'>
                <h2 className='text-zinc-800 dark:text-white text-2xl'>AMP Portal Signin</h2>
            </Card.Head>
            <Card.Body>
                <Suspense fallback='...loading'>
                    <SignupForm />
                </Suspense>
            </Card.Body>
        </Card>
      </div>
  )
}
