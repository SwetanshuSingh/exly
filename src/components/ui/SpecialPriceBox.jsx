export default function SpecialPriceBox(){
    return (
        <div className="w-full h-full lg:p-12 p-[30px] mt-8 flex flex-col items-center gap-2 font-0 border-2 border-[#FF6B00] border-dashed rounded-2xl text-center">
            <h4 className="lg:text-[22px] text-[19px] font-semibold">Marketing Accelerator For Coaches : ₹999</h4>
            <h3 className="lg:text-[33px] text-[22px] font-bold">11 Bonus Exclusive Bonuses: ₹5489</h3>
            <h2 className="lg:text-[37px] text-[28px] font-bold text-[#FF6B00]">1 Month Free EXLY Pro Subscription worth ₹2500</h2>
            <h3 className="lg:text-[23px] text-[16px] font-semibold">(Payment Gateway, Email, CRM, WA and more…)</h3>
            <h3 className="lg:text-[32px] text-[24px] font-bold mt-3">Regular Price: ₹8988</h3>

            <div className="bg-white px-8 py-3 shadow-special-price rounded-xl w-fit mt-1">
                <h2 className="lg:text-[34px] text-[25px] text-[#FF6B00] font-bold">Today`s Price: ₹299</h2>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="box bg-gradient-to-r from-[#FF6B00] to-[#FF9B52] flex flex-col items-center  justify-center gap-1 border rounded-2xl px-6 py-3 shadow-button-orange text-white font-semibold text-[17px]">
                        <p className="">Skyrocket your Coaching & Training Business Now!</p>
                        <p>(₹229 <span className="line-through">₹8988</span>)</p>
                    </div>
                    <p className="uppercase text-[16px] font-medium mt-1">REGISTER BEFORE FEBRUARY 27, 2024 TO UNLOCK FREE BONUSES</p>
            </div>
        </div>
    )
}