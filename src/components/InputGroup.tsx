import { useRef, useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import axios from "axios";

export const InputGroup = () => {
    const courseRef = useRef<HTMLInputElement>(null);
    const durationRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState([]);

    return <div className="flex flex-col md:flex-row shadow-lg lg:mx-20 md:mx-13 mx-6 rounded-md px-5 mt-6">
        <div className="text-md border-b-2 md:border-none font-bold md:text-xl py-5 text-center lg:max-w-xl md:max-w-72">
            Enter The Course Name, The Number Of Days And Start Creating Your Personalized Learning Journey. Click Generate Course And Get Started.
        </div>
        <div className="flex flex-col justify-around py-5 md:px-20 md:gap-0 gap-4">
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
                <span className="text-[#666565] text-xs pl-1">(No. Of Days)</span></div>
                <div>
                    <Input reference={durationRef} placeholder="No. of days" type="text" />
                </div>
            </div>
            <div className="text-center py-5">
                <Button intent={"primary"} className="border rounded-md transition-all ease-in-out duration-300 " size={"medium"} disabled={false} onClick={async () => {
                    if(!courseRef.current || !durationRef.current) return;
                    const courseName = courseRef.current.value;
                    const days = durationRef.current.value;

                    const response = await axios.post("http://localhost:3000/generate-course",
                        {
                        courseName : courseName,
                        duration: days
                    }, {
                        headers: {
                            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTEwY2Y0NzQxNTVkMTkzOTkzN2ZhZjciLCJpYXQiOjE3NjQyMjU2NDh9.we0sEB3pQNt5lTmWxqrUkanQxD1m_z1UilJz-7sMDFE"
                        }
                    })
                    
                    // setData([...data , {response.data}]);
                    console.log(response.data.jsonRes);
                    console.log(response.data.jsonRes.courseName);
                    console.log(response.data.jsonRes.days);
                    console.log(response.data.jsonRes.duration);
                }}> Generate Course </Button>
            </div>
        </div>
        <div>
            <h1>
                {data}
            </h1>
        </div>
    </div>
}