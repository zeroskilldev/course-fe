import { Button } from "../components/ui/button"

export const ErrorPage = () => {
    return <div className="flex flex-col items-center justify-center h-[83vh]">

        <div className="md:text-9xl text-4xl">
            404
        </div>
        <div className="md:text-3xl text-xl">
            Page Not Found
        </div>
        <div>
            <Button className="border rounded-md my-10" size={"small"}>
                Back To Home
            </Button>  
        </div>
    </div>
}