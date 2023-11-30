import Link from "next/link";

export default function Footer(){
    const d = new Date();
    let year = d.getFullYear();
    return(
        <div className="flex justify-center space-x-2 text-sm">
            <div>Copyright &copy; {year} AMP Puppies</div>
            <div>|</div>
            <div>Designed & Developed by <Link href='https://advantagemediapartners.com'>Advantage Media Partners</Link></div>
        </div>
    )
}