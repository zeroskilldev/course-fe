import { HeroSection } from "../components/ui/Hero"
import { InputGroup } from "../components/InputGroup"
import { Feedback } from "../components/Feedback"

export const HomePage = () => {
    return <div>
        <div>
            <HeroSection />
        </div>
        <div>
            <InputGroup />
        </div>
        <div>
            <Feedback />
        </div>
    </div>
}