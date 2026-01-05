import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export const Connect = () => {
    return <div className="h-[83vh] lg:px-20 md:px-13 px-4 py-5">
            <div className="text-lg text-center">
                Connect With Me
            </div>
            <div className="text-center text-[#666565] text-sm py-3">
                This platform is built to help you generate structured, personalized courses using AI.
                Have suggestions, feedback, or ideas to improve the learning experience? I’d love to hear from you.
            </div>
            <div className="my-6 flex flex-col gap-2.5">
                <div className="text-lg py-3">
                    Important Links
                </div>
                <div className="text-[16px] cursor-pointer">
                    Request a Feature
                </div>         
                <div className="text-[16px] cursor-pointer">
                    Report an Issue
                </div>
                <div className="text-[16px] cursor-pointer">   
                    Contact Support
                </div>
            </div>
            <div>
                <div className="text-lg pt-3">
                    Social Links
                </div>
                <div className="text-md text-[#656566] py-2">
                    Connect with me on my socials
                </div>
                <div className="flex gap-5 pt-1">
                    <a href="https://github.com/zeroskilldev" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/krish-mewari-868751314/" target="_blank">
                        <LinkedinIcon />
                    </a>
                    <a href="https://x.com/boringCoderaf" target="_blank">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.instagram.com/krishmewari.03/" target="_blank">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </div>
}