import { Item } from "./Item";
import { SubItem } from "./SubItem";

export const Nav = ({
    children,
    className,
}: {
    children:React.ReactNode;
    className?:string;
}) => {
    return(
        <nav className={className}>
            {children}
        </nav>
    )
}

Nav.Item = Item
Nav.SubItem = SubItem