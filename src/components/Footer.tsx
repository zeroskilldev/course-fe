export const Footer = () => {
    return <div className="bottom-0 left-0 max-h-20 border-t w-screen mt-5 py-5 flex flex-col justify-center items-center text-sm gap-y-0.5">
        <div className="text-[#656566] py-2">
            Help Me With My College Fee.
            <span className="font-bold text-black cursor-pointer" onClick={() => {
                window.location.href="https://razorpay.me/@krishmewari";
            }}> Donate Here.</span>
        </div>
        <div>
            &copy; 2025 | All Rights Reserved. Made with 💙 by Krish.
        </div>  
    </div>
}