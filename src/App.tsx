
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Connect } from "./pages/Connect";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
// import { Connect } from "./pages/Connect";
// import { ErrorPage } from "./pages/Error";
import { RequestFeature } from "./pages/RequestFeature";
import { Signin } from "./pages/Signup";

export default function App(){
  return <div className="h-screen w-screen overflow-x-hidden">
    <Navbar />
    <HomePage />
    {/* <ErrorPage /> */}
    {/* <Signin /> */}
    {/* <LoginPage /> */}
    <Footer />
  </div>
}