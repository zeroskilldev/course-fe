import { useRef } from "react";
import { Button } from "./button"
import { Input } from "./input"
import axios from "axios";

export const InputGroup = () => {
    const courseRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);

    return <div className="flex flex-col shadow-lg lg:mx-20 md:mx-13 mx-6 rounded-md/50 px-5 md:py-10 py-6">
        <div className="flex md:flex-row flex-col justify-around py-5 md:px-20 md:gap-0 gap-4">
            <div className="pb-3">
                <div>Course Name</div>
                <Input reference={courseRef} type="text" placeholder="Course" />
            </div>
            <div>
                <div>Duration</div>
                <div>
                    <Input reference={durationRef} placeholder="No. of days" type="text" />
                </div>
            </div>
        </div>
        <div className="text-center pt-5">
            <Button intent={"primary"} className="border rounded-lg transition-all ease-in-out duration-300 " size={"medium"} disabled={false} onClick={async () => {
                if(!courseRef.current || !durationRef.current) return;
                const courseName = courseRef.current.value;
                const days = durationRef.current.value;

                const response = await axios.post("", {
                    courseName : courseName,
                    days
                })
            }}> Generate Course </Button>
        </div>
    </div>
}