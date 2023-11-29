import classNames from "classnames";
import { Card } from "../card";

export const Body = ({
    children,
    className='',
}:{
    children:React.ReactNode;
    className?:string;
}) => {
    return (
        <Card.Body className={classNames(
            className
        )}>
            {children}
        </Card.Body>
    )
} 