import { Button } from "./button"
import { Input } from "./input"

export const InputGroup = () => {
    return <div className="flex flex-col shadow-lg md:mx-20 mx-10 rounded-md/50 px-5 py-10">
        <div className="flex md:flex-row flex-col justify-around py-5 md:px-20 md:gap-0 gap-4">
            <div className="pb-3">
                <div>Course Name</div>
                <Input type="text" placeholder="Course" />
            </div>
            <div>
                <div>Duration</div>
                <div>
                    <Input placeholder="No. of days" type="text" />
                </div>
            </div>
        </div>
        <div className="text-center pt-5">
            <Button intent={"primary"} className="transition-all ease-in-out duration-300" size={"medium"} disabled={false}> Generate Course </Button>
        </div>
    </div>
}