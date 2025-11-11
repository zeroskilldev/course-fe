interface Buttonprops {
    text: string,
    isDisabled: boolean
}

export const Button = (props: Buttonprops) => {
    const isDisabled = props.isDisabled ? "disabled" : "none";

    return <button className={`cursor-pointer border px-4 py-1.5 rounded-xl ${isDisabled}`} >
        {props.text}
    </button>
}