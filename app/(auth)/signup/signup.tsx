import { Form } from '@/components/form'
import Messages from './messages'
import { Button } from '@/components/button'
import Link from 'next/link'

export default function SignupForm() {
    return (
        <Form
            className="flex-1 flex flex-col w-full justify-center gap-4 pb-4"
            action="/auth/sign-up"
            method="POST"
            >
            <Messages />
            <Form.FancyInput
                tabIndex={1}
                id="fname"
                type="text"
                label='First Name'
                required />
            <Form.FancyInput
                tabIndex={2}
                id="lname"
                type="text"
                label='Last Name'
                required />
            <Form.FancyInput
                tabIndex={3}
                id="email"
                type="text"
                label='Email'
                required />
            <Form.FancyInput
                tabIndex={4}
                id="password"
                type="password"
                label='Password'
                required />
            <Button label='Sign Up' color='lime' size='base' className='rounded-lg' full />
            <div className='flex justify-center gap-2'>
                <Link href='/'>Go Back</Link>
            </div> 
        </Form>
    )
}