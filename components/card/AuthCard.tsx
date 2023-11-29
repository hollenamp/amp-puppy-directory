type Props = {
    children?: React.ReactNode;
    className?:string;
}

const AuthCard = ({ className, children }:Props) => { 
    return(
    <div className={`${className} w-full flex flex-col p-4 bg-white overflow-hidden text-center rounded-md`}>
        {children}
    </div>
    )
}

export default AuthCard
