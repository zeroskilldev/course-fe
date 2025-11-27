import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/home";

export default function App(){
  return <div className="h-screen w-screen overflow-x-hidden">
    <Navbar />
    <HomePage />
    <Footer />
  </div>
}