import { Button } from "./button"
import { Input } from "./input"

export const InputGroup = () => {
    return <div className="flex flex-col">
        <div className="flex md:flex-row flex-col justify-around md:py-5 md:px-20 md:gap-0 gap-4">
            <div>
                <label htmlFor="course">Course Name</label>
                <Input id="course" type="text" placeholder="Course" />
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <div>
                    <Input id="duration" placeholder="No. of days" type="text" />
                </div>
            </div>
        </div>
        <div className="text-center py-10">
            <Button intent={"primary"} className="text-[#F9F7F7] transition-all ease-in-out duration-300" size={"medium"} disabled={false}> Generate Course </Button>
        </div>
    </div>
}