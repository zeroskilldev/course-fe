import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"

export const RequestFeature = () => {
    return <div className="h-[83vh] px-4 py-4">
        <div className="text-center text-xl py-2">
            Request a Feature
        </div>
        <div className="py-2 text-[16px] md:text-lg">
            Have an idea that could make this platform more powerful or easier to use?
            Let me know what feature you’d like to see added in future updates.
        </div>
        <div className="text-sm text-[#656566] py-3">
            Examples:
            <ul>• Download courses as PDF</ul>
            <ul>• Difficulty level selection</ul>
            <ul>• Course progress tracking</ul>
            <ul>• More customization options</ul>
        </div>
        <div className="text-sm pt-2">
            Fill the feature details below and help me make this website better for everyone...
        </div>
        <div>
            <Input type="text" placeholder="Feature Title"/>
        </div>
        <div>
            <textarea className="w-full bg-[#faf7f7] rounded-md py-2 px-3 outline-none text-sm" placeholder="Feature Details..." />
        </div>
        <div className="text-center my-5">
            <Button intent={"primary"} size={"small"} className="border rounded-md">Request</Button>
        </div>

        <div className="py-3 text-sm text-[#656566] text-center">
            Note : I hope your feature gets added as soon as possible. It can take time as I am a regular college student, hope you understand this.
        </div>
    </div>
} 