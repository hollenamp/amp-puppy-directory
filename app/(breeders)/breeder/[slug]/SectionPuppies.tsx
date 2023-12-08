import { Card } from "@/components/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'
import Link from "next/link"

export default function SectionPuppies({
    params
}:{
    params:{slug:string[]}
}) {
    const puppies = [
        {
            id: 1,
            title: 'Puppy 01',
            href: '/puppies/001',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Samoyed', href: '#' },
            featuredImage: {src:'images/samoyed-01.jpg', width:2000, height:667}
        },
        {
            id: 2,
            title: 'Puppy 02',
            href: '/puppies/02',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Samoyed', href: '#' },
            featuredImage: {src:'images/samoyed-02.jpg', width:2000, height:667}
        },
        {
            id: 3,
            title: 'Puppy 03',
            href: '/puppies/03',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Samoyed', href: '#' },
            featuredImage: {src:'images/samoyed-03.jpg', width:2000, height:667}
        },
        {
            id: 4,
            title: 'Puppy 04',
            href: '/puppies/04',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Samoyed', href: '#' },
            featuredImage: {src:'images/samoyed-04.jpg', width:2000, height:667}
        }
    ]

    return (
        <>
            <span className="absolute inset-0" id="puppies" />
            <div className="mx-auto lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Available Puppies</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Puppy Content Here
                </p>
            </div>
            <div className="w-full mt-10 gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-zinc-700">
            { puppies.map((puppy) => {
                return(
                    <Card key={puppy.id} radius="xl" className="hover:bg-zinc-50">
                        <Link href={puppy.href} scroll={false}>
                            <div className="rounded-t-xl overflow-hidden relative">
                                <div className="absolute top-4 left-0 bg-lime-400 z-10 px-4 py-1 text-zinc-700 text-center min-w-[50%]">Available</div>
                                <AspectRatio  ratio={1 / 1} className="bg-muted">
                                    <Image
                                        className="object-cover"
                                        src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${puppy.featuredImage.src}`}
                                        alt="Puppy Photo"
                                        fill
                                        />

                                </AspectRatio>
                            </div>
                        </Link>
                        <Card.Body className="text-center space-y-2">
                            <div>
                                <h3 className="mt-3 text-xl font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                                    <Link href={puppy.href} scroll={false}>
                                        {puppy.title}
                                    </Link>
                                </h3>
                                <time dateTime={puppy.datetime} className="text-zinc-500">DOB: {puppy.date}</time>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center gap-x-4 text-xs">
                                    <Link href={puppy.href} scroll={false} className="relative z-10 rounded-full bg-zinc-100 px-3 py-1.5 font-medium text-zinc-600 hover:bg-zinc-100">
                                    {puppy.category.title}
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <p className="line-clamp-3 text-sm leading-6 text-zinc-600">{puppy.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <Link href={puppy.href} scroll={false} className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
                                        View Puppy
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
        </>
    )
}