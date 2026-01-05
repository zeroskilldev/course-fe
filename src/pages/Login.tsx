import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"

export const LoginPage = () => {
    return <div className="h-[83vh] flex justify-center items-center">
        <div className="shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] rounded-md w-[85vw] md:w-[35vw] flex-row justify-center items-center py-8 px-4 text-center">
            <div className="text-3xl md:text-5xl py-5">
                CourseGen
            </div>
            <div className="pb-4 text-sm md:text-lg">
                AI-Powered Smart Course Generation Site.
            </div>
            <div className="text-sm text-[#656566] py-2">
                Fill the details below to login to the site.
            </div>
            <div className="py-2 md:mx-6">
                <Input type="text" placeholder="E-mail"/>
                <Input type="text" placeholder="Password"/>
            </div>
            <div className="my-6"> 
                <Button className="border rounded-md" intent={"primary"} size={"small"}>Continue To Site</Button>
            </div>
        </div>
    </div>
}