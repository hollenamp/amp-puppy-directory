import Image from "next/image";

interface Props {
    className?: string;
    data: any;
}

const Explore = ({className, data, ...props }:Props) => {
    return (
      <div 
        className={`relative border-b border-gray-200 bg-white flex flex-col ${className} `}
        {...props}
      >
        <Image src={`/${data.avatar}`}
          alt={data.handle}
          width={400}
          height={400}
          className="aspect-square"
        />
        <div className="px-1 pt-2 pb-1 md:py-8 bg-purple-600">
          <h3 className="text-sm md:text-xl text-white">{data.handle}</h3>
        </div>
      </div>
    )
  } 
  
  export default Explore