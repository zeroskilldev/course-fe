import { Button } from "./button"
import { Input } from "./input"

export const InputGroup = () => {
    return <div>
        <div className="flex flex-row justify-around py-5 px-20">
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
            <Button text="Generate Course" isDisabled={true} />
        </div>
    </div>
}