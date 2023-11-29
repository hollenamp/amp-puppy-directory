import Image from "next/image"

const ApplicationLogo = (
    {
        className,
        alt
    }:{
        alt:string
        className:string
    }
) => (
    <>
        <Image 
            className={className}
            src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/amp-logo.png`}
            width={250}
            height={250}
            alt={alt}
             />
    </>
)

export default ApplicationLogo