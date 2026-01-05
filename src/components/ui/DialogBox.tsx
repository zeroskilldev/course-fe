import { Button } from "./button"

export const DialogBox = () => {
    return <div className="bg-white shadow-lg mx-10 py-15 md:mx-50 flex flex-col justify-center items-center">
        Your Course Has Been Generated.
        <div className="my-4">
            <Button className="border rounded-md" size={"small"}>Continue</Button>
        </div>
    </div>
}