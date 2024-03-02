export default function MoneyBack(){
    return (
        <section className="w-full h-full bg-[#fff5ed] lg:flex lg:flex-row flex flex-col lg:justify-around lg:px-[70px] lg:py-[70px] px-[20px] py-[50px]">
            <img className="w-[520px] h-[370px]" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/money-1.svg" alt="money" />
            <div className="font-0 text-[18px] flex flex-col gap-3">
                <p className="lg:w-[570px] text-center">We are so confident in the effectiveness of our marketing accelerator program that we offer a 100% satisfaction guarantee. If you are not completely satisfied with your experience, we will refund your investment in full.</p>
                <p className="lg:w-[570px] mt-4 text-center">Your success is our top priority, and we are committed to delivering exceptional value. Join us risk-free and take your coaching business to new heights!</p>

                <div className="w-full flex flex-col items-center gap-2">
                    <div className="w-full box bg-gradient-to-r from-[#FF6B00] to-[#FF9B52] flex flex-col items-center  justify-center gap-1 border rounded-2xl px-6 py-3 shadow-button-orange text-white font-semibold text-[17px]">
                        <p className="">Skyrocket your Coaching & Training Business Now!</p>
                        <p>(₹229 <span className="line-through">₹8988</span>)</p>
                    </div>

                    <p className="uppercase text-sm font-medium">Sign up now to get</p>
                    <p className="text-sm font-bold uppercase text-center">1 Month Free EXLY Pro Subscription worth Rs.2500</p>
                    <p className="text-sm font-semibold">(Payment Gateway, Email, CRM, WA and more…)</p>
            </div>
            </div>
        </section>
    )
}