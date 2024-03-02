import AfterBox from "./ui/AfterBox";
import BeforeBox from "./ui/BeforeBox";
import CheckBox from "./ui/CheckBox";

export default function BusinessPlan(){
    return (
        <section className="w-full h-full bg-[#fff5ed] flex flex-col items-center lg:px-5 lg:py-[70px] px-[20px] py-[50px] font-0 gap-4">
            <h2 className="lg:text-[38px] text-[30px] font-bold text-center">In your coaching business do you <span className="text-[#FF6B00]">struggle</span> with</h2>
            <div className="bg-[#FF6B00] h-1 w-16"></div>

            <div className="checkboxes flex flex-col mt-4">
                <div className="line-1 lg:flex lg:flex-row flex flex-col gap-4">
                    <CheckBox text="Content Creation" />
                    <CheckBox text="Building a Strong brand" />
                </div>
            </div>

            <div className="checkboxes flex flex-col">
                <div className="line-1 lg:flex lg:flex-row flex flex-col gap-4">
                    <CheckBox text="Followers growth" />
                    <CheckBox text="Monetizing content" />
                </div>
            </div>

            <div className="checkboxes flex flex-col">
                <div className="line-1 lg:flex lg:flex-row flex flex-col gap-4">
                    <CheckBox text="Targetting the right audience" />
                    <CheckBox text="ROI of Marketing" />
                </div>
            </div>

            <h3 className="mt-4 text-[21px] font-semibold text-center">If your answer is yes to any one of them, are the following after-effects something you desire to achieve?</h3>
            
            <div className="w-full lg:flex lg:flex-row lg:items-start lg:justify-center flex flex-col gap-6">
                <BeforeBox />
                <AfterBox />
            </div>

            <h3 className="text-[25px] font-semibold pt-6 text-center">Don&apos;t miss this <span className="text-[#FF6B00]">life-changing opportunity!</span></h3>

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