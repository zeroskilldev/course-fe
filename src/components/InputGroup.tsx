import { useRef, useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/Input"
// import { DialogBox } from "./ui/DialogBox";
import { generateCourse } from "../services/api";


export const InputGroup = () => {
    const courseRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);
    // response state for generated course can be stored here if needed later
    // const [loading, setLoading] = useState(false);

    return <div>
        {/* {!loading && <div>
            <DialogBox />
        </div>} */}
        {<div className="flex flex-col md:flex-row shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] lg:mx-20 md:mx-13 mx-6 rounded-md px-5 mt-20 mb-10">
            <div className="text-md border-b-2 md:border-none font-bold md:text-xl py-5 text-center lg:max-w-xl md:max-w-60 flex items-center">
                <div>
                    Enter The Course Name, The Number Of Days And Start Creating Your Personalized Course. Click Generate Course And Get Started With Your Personalized Learning Journey.
                </div> 
            </div>
            <div className="flex flex-col justify-around py-5 md:px-20 md:gap-0 gap-4 w-full md:ml-5">
                <div className="pb-3">
                    <div className="font-bold text-[#464646] cursor-pointer" onClick={() => {
                        courseRef.current?.focus();
                    }}>Course Name</div>
                    <Input reference={courseRef} type="text" placeholder="Course" />
                </div>
                <div>
                    <div className="font-bold text-[#464646] cursor-pointer" onClick={() => {
                        durationRef.current?.focus();
                    }}>Duration
                    <span className="text-[#666565] text-xs pl-1">(Number Of Days)</span></div>
                    <div>
                        <Input reference={durationRef} placeholder="No. of days" type="text" />
                    </div>
                </div>
                <div className="text-center pt-5">
                    <Button intent={"primary"} className="border rounded-md transition-all ease-in-out duration-300" size={"medium"} disabled={false} onClick={async () => {
                        // setLoading(true);
                        if(!courseRef.current || !durationRef.current) {
                            // setLoading(false);
                            return;
                        }
                        const courseName = courseRef.current.value;
                        const days = durationRef.current.value;

                        try {
                            const res = await generateCourse(courseName, days)
                            console.log(res);
                        } catch (err) {
                            console.error('Failed to generate course', err)
                            alert('Failed to generate course. Please try again.')
                        }
                    }}> Generate Course </Button>
                </div>
                <div className="text-[#666666] text-xs text-center pb-5 md:pt-2">
                    Generating the course will take few seconds.
                </div>
            </div>
        </div>}
     </div>
}