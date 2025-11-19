import type { HTMLInputTypeAttribute } from "react"

interface InputProps{
    id?: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    reference: React.Ref<HTMLInputElement>
}

export const Input = (props: InputProps) => {
    return <div className="border rounded-md outline-none">
        <input ref={props.reference} id={props.id} type={props.type} placeholder={props.placeholder} className="py-1 px-2"/>
    </div>
}