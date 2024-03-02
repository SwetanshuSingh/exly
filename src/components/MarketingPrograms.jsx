import TickFill from "../assets/svgs/TickFill";
import MarketingBox from "./ui/MarketingBox";

export default function MarketingPrograms(){
    return (
        <section className="w-full h-full bg-[#fff5ed] flex flex-col items-center px-5 py-[70px] font-0 gap-4">
            <h2 className="lg:text-[38px] text-[30px] max-w-[1140px] font-bold text-center">By joining marketing accelerator program, you can expect to achieve the following <span className="text-[#FF6B00]">remarkable results in your coaching business.</span></h2>
            <div className="bg-[#FF6B00] h-1 w-16"></div>

            <div className="boxes flex flex-col gap-5 max-w-[1140px] h-full mt-5">
                <div className="col-1 w-full lg:flex lg:flex-row lg:justify-between flex flex-col gap-5 items-center">
                    <MarketingBox text="Generate organic leads effortlessly." />
                    <MarketingBox text="Streamline content creation and eliminate worries." />
                </div>

                <div className="col-1 w-full lg:flex lg:flex-row lg:justify-between flex flex-col gap-5 items-center">
                    <MarketingBox text="Build a strong and memorable brand presence." />
                    <MarketingBox text="Convert leads into paying clients at high rates." />
                </div>

                <div className="col-1 w-full lg:flex lg:flex-row lg:justify-between flex flex-col gap-5 items-center">
                    <MarketingBox text="Develop core marketing skills for rapid growth." />
                    <MarketingBox text="Attain your financial goals and aspirations." />
                </div>

                <div className="col-1 w-full lg:flex lg:flex-row lg:justify-between flex flex-col gap-5 items-center">
                    <MarketingBox text="Master organic and performance marketing strategies." />
                    <MarketingBox text="Build a thriving and sustainable coaching business." />
                </div>

                <div className="w-full lg:h-[64px] h-[76px] p-5 bg-white font-0 flex items-center justify-center gap-3 rounded-xl shadow-marketing-box">
                    <TickFill />
                    <p className="text-[17px] text-center">Dominate Instagram, Facebook, YouTube, LinkedIn, Twitter, and email marketing.</p>
                </div>
            </div>

            <p className="lg:text-[21px] text-[18px] text-center font-semibold mt-6">Get ready to unlock a whole new level of success with a powerful Marketing Accelerator Program.</p>

            <p className="lg:text-[21px] text-[18px] font-semibold text-center mb-4">Say goodbye to frustration and hello to explosive growth as you achieve remarkable results in your <br/>coaching business.</p>

            <div className="flex flex-col items-center gap-2">
                    <div className="box bg-gradient-to-r from-[#FF6B00] to-[#FF9B52] flex flex-col items-center  justify-center gap-1 border rounded-2xl px-6 py-3 shadow-button-orange text-white font-semibold text-[17px]">
                        <p className="">Skyrocket your Coaching & Training Business Now!</p>
                        <p>(₹229 <span className="line-through">₹8988</span>)</p>
                    </div>

                    <p className="uppercase text-sm font-medium">Sign up now to get</p>
                    <p className="text-sm font-bold uppercase text-center">1 Month Free EXLY Pro Subscription worth Rs.2500</p>
                    <p className="text-sm">(Payment Gateway, Email, CRM, WA and more…)</p>
            </div>

        </section>
    )
}