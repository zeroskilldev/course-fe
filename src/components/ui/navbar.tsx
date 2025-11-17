import { Button } from "./button"

export const Navbar = () => {
    return <div className="sticky z-50 left-0 top-0 border-b text-lg py-3 h-16 w-screen backdrop-blur-xs">
        <div className="flex justify-around pb-3 px-10">
            <div className="absolute left-10 pt-1">
                Logo
            </div>
            <div className="md:flex justify-around gap-x-6 hidden">
                <div>
                    <Button intent={"primary"} size={"small"} className="cursor-pointer font-semibold" >Home</Button>
                </div>
                <div>
                    <Button intent={"primary"} size={"small"} className="cursor-pointer font-semibold" >Services</Button>
                </div>
                <div>
                    <Button intent={"primary"} size={"small"} className="cursor-pointer font-semibold"> Contacts</Button>
                </div>
                <div>
                    <Button intent={"primary"} size={"small"} className="cursor-pointer font-semibold"> Log In</Button>
                </div>
                <div>
                    <Button intent={"primary"} size={"small"} className="cursor-pointer font-semibold"> Sign Up</Button>
                </div>
            </div>  
        </div>
        
    </div>
} 