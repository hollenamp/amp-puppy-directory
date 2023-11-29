import { FancyInput } from "./Input";
import Messages from "./Messages";

export const Form = ({
    children,
    action,
    method, 
    className
}:{
    children?: React.ReactNode
    action?: string
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
    className?: string
}) => {
    return(
        <form
            className={className}
            action={action}
            method={method}
            >{children}
        </form>
    )
}

Form.FancyInput = FancyInput
Form.Messages = Messages