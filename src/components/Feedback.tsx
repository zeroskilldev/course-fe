import { useRef } from "react"
import { Input } from "./ui/Input"
import { Button } from "./ui/button";

export const Feedback = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const feedbackRef = useRef(null);


    return <div className="flex flex-col gap-2 items-center justify-center py-25 lg:mx-20 md:mx-13 mx-6 px-1">
        <div className="text-xl font-semibold border-b-2 md:border-0 py-2">
            Feedbacks and Suggestions
        </div>
        <div className="text-[#656566] text-center text-sm">
            Your feedback helps make this course generator better for everyone.
            If you have thoughts about the course structure, content quality, or overall experience, please share them below.
        </div>
        <div className="w-full px-4 py-2">
            <div className="md:flex md:justify-between md:gap-4">
                <div className="md:w-dvw">
                    <Input type="text" placeholder="Name" reference={nameRef}/>
                </div>
                <div className="md:w-dvw">
                    <Input type="text" placeholder="Email" reference={emailRef}/>
                </div>
            </div>
            
            <textarea className="w-full bg-[#faf7f7] rounded-md py-2 px-3 outline-none text-sm h-28" placeholder="Tell what worked well, what didn’t, or what can be improved…" ref={feedbackRef}/>
            <div className="text-xs text-[#656566] text-center">
                Every suggestion is reviewed and helps improve future course generation.
            </div>
        </div>
        <Button className="border rounded-md" size={"small"} onClick={() => {

        }}>Submit</Button>
    </div>
}