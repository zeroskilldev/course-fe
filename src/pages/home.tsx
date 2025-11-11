import { HeroSection } from "../components/ui/hero"
import { InputGroup } from "../components/ui/InputGroup"
import { Navbar } from "../components/ui/navbar"

export const HomePage = () => {
    return <div>
        <Navbar />
        <HeroSection />
        <InputGroup />
    </div>
}