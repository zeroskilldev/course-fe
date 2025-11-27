import type { HTMLInputTypeAttribute } from "react"

interface InputProps{
    type: HTMLInputTypeAttribute,
    placeholder: string,
    reference: React.Ref<HTMLInputElement>
}

export const Input = (props: InputProps) => {
    return <div className="bg-[#faf7f7] rounded-md w-full my-2">
        <input ref={props.reference} type={props.type} placeholder={props.placeholder} className="w-full text-sm outline-none py-2 px-3"/>
    </div>
}