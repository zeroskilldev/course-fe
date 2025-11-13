import type { HTMLInputTypeAttribute } from "react"

interface InputProps{
    id?: string,
    type: HTMLInputTypeAttribute,
    placeholder: string
}

export const Input = (props: InputProps) => {
    return <div className="border-b rounded-md">
        <input id={props.id} type={props.type} placeholder={props.placeholder} className="py-1 px-2"/>
    </div>
}