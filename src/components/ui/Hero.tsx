
export const HeroSection = () => {
    return <div className="flex flex-col items-center justify-center text-center py-5 my-5">
        <div className="border rounded-2xl text-[#464646] w-fit py-1 px-4 mt-3 mb-6">
            Beta Product
        </div>
            <div className="md:text-6xl text-[32px] md:px-25 px-5 text-center font-roboto-slab font-medium flex-col items-center">
                <div className="flex justify-center">
                    Generate Courses With
                </div>
                <div className="flex justify-center">
                    The Power Of AI
                </div>
            </div>
            <div className="md:text-lg text-md pt-5 px-4 md:px-35 text-[#464646]">
                <p>
                    Empower your learning journey with intelligent AI. Create immersive, tailored courses in minutes — learn smarter, faster, and better.
                </p>
            </div>  
            <div className="my-5 py-5">
                <img className="w-[85vw] h-[60vw] rounded-md" src="src/components/images/updatedHero.png" alt="" />
            </div>
    </div>
}