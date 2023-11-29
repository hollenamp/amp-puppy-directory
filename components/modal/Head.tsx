import { Card } from "../card";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export const Head = ({
    children,
    className ='',
    backButton,
    saveButton,
    saveIsVisable,
    label,
}:{
    children?:React.ReactNode;
    className?:string;
    backButton?:any;
    saveButton?:any;
    saveIsVisable?:boolean;
    label?:string;
}) => {
    const router = useRouter() 
    document.addEventListener('keydown', function(event) {
        if (event.key  === "Escape") {
            const button = document.getElementById('modalBackButton') as HTMLButtonElement;
            button?.focus();
        }
    });

    const handleBackButton = () => {
        if(backButton){
            backButton()
        } else {
            router.back()
        }
    }

    return (
        <Card.Head className={classNames(
            className
        )}>
            <div className="flex justify-between items-center -my-2">
                <div className='h-8 w-8 md:w-1/4 flex-none py-3 flex items-center gap-2 cursor-pointer'>
                    <button onClick={handleBackButton} id="modalBackButton" className=" rounded-md" />
                </div>
                <div className='flex-grow text-center dialog-handle py-2 cursor-grab'>
                    <div className='w-full pb-0.5'><hr className='w-24 mx-auto border border-zinc-400 dark:border-zinc-400' /></div>
                    <h3 className='text-base py-1 md:text-lg font-semibold whitespace-nowrap text-white dark:text-zinc-400'>
                        { label ? label : children }
                    </h3>
                </div>
                <div className='h-8 w-8 md:w-1/4 text-right flex-none flex items-center justify-end'>
                    { saveIsVisable &&
                        <></>
                        // <Button tabIndex='-1' onClick={saveButton} label='Save' size='xs' color='clear' />
                    }
                </div>
            </div>
        </Card.Head>
    )
} 