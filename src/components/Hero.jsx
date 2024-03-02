import Headerbox from "./Header";
import InvestSvg from "../assets/svgs/Invest";
import Business from "../assets/svgs/Business";
import { useState, useEffect } from "react";

export default function Hero(){
    const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return { minutes, seconds };
  };
    return (
        <main className="w-full font-0 h-full flex flex-col gap-6 items-center bg-[url(https://marketingaccelerator.in/wp-content/uploads/2023/07/bg-image.svg)] px-[20px] pb-[70px] lg:px-0">
            <Headerbox text="EXCLUSIVE FULL DAY EVENT FOR COACHES AND TRAINERS" />
            <h2 className="lg:text-[38px] text-[30px] text-center font-0 font-bold">Unlock Secrets To <span className="text-[#FF6B00]">3X Your Coaching & Training Business</span></h2>

            <div className="banners w-full flex flex-col items-center lg:flex lg:flex-row lg:justify-center md:flex md:flex-row md:justify-center lg:gap-20 gap-10">

                <div className="left flex flex-col items-center md:flex md:items-start gap-4">
                    <div className="flex flex-col items-center">

                    <img className="w-[256px] h-[318px]" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/CHR-Png-2.png" alt="hr" />
                    <div className="custom-shadow bg-[#FFFBFB] w-fit p-6 rounded-2xl shadow-hr">
                        <h4 className="text-[28px] text-[#FF6B00] font-semibold text-center">Chethan HR</h4>
                        <p className="text-[16px] text-[#2C2C2E] font-semibold text-center">Head of Marketing & Community at Quantum Leap & Brand <br/> Rajiv Talreja</p>
                    </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:max-w-[540px] font-medium">
                        <div className="flex items-center gap-2">
                            <img className="rounded-full" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/check-fill.svg" alt="" />
                            <p className="text-[18px] text-[#0C0239]">Grew Rajiv Talreja’s Social Media from 50k to 1 Million</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img className="rounded-full" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/check-fill.svg" alt="" />
                            <p className="text-[18px] text-[#0C0239]">Generated 30 Crs Organically in 2.5 Years for Rajiv Talreja</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img className="rounded-full" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/check-fill.svg" alt="" />
                            <p className="text-[18px] text-[#0C0239]">Raised MOUs worth $16B for Govt. of Karnataka through Invest Karnataka 2016  (Rs 1,33,000 crores)</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img className="rounded-full" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/check-fill.svg" alt="" />
                            <p className="text-[18px] text-[#0C0239]">Ex-CEO Freshmakers</p>
                        </div>
                    </div>
                </div>

                <div className="right flex flex-col gap-7">
                    <h4 className="text-[23px] font-[700] text-center">Worked and helped with the <br/> growth of:</h4>
                    
                    <div className="group flex flex-col gap-3">
                    <div className="box lg:w-[525px] h-[51px] bg-white flex items-center gap-2  border rounded-xl px-[8px] py-[10px] shadow-svg-box">
                        <img className="w-[35px] h-[35px]" src="https://marketingaccelerator.in/wp-content/uploads/2023/07/New-Project-25-1.png" alt="img" />
                        <p className="text-[#0C0239] font-normal text-[18px]">Rajiv Talreja</p>
                    </div>

                    <div className="box lg:w-[525px] h-[51px] bg-white flex items-center gap-2 border rounded-xl px-[8px] py-[10px] shadow-svg-box">
                        <InvestSvg />
                        <p className="text-[#0C0239] font-normal text-[18px]">Invest Karnataka 2016</p>
                    </div>

                    <div className="box lg:w-[525px] h-[51px] bg-white flex items-center gap-2 border rounded-xl px-[8px] py-[10px] shadow-svg-box">
                        <Business />
                        <p className="text-[#0C0239] font-normal text-[18px]">100+ Businesses</p>
                    </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                    <div className="box bg-gradient-to-r from-[#FF6B00] to-[#FF9B52] flex flex-col items-center  justify-center gap-1 border rounded-2xl px-6 py-3 shadow-button-orange text-white font-semibold text-[17px]">
                        <p className="">Skyrocket your Coaching & Training Business Now!</p>
                        <p>(₹229 <span className="line-through">₹8988</span>)</p>
                    </div>

                    <p className="uppercase text-sm font-medium">Sign up now to get</p>
                    <p className="text-sm font-bold uppercase text-center">1 Month Free EXLY Pro Subscription worth Rs.2500</p>
                    <p className="text-sm">(Payment Gateway, Email, CRM, WA and more…)</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 mt-4">
                        <h3 className="lg:text-[26px] text-[24px] font-bold text-center">Starts On <span className="text-[#FF6B00]">31st Aug 2023</span>(Full Day Event)</h3>
                        <p className="text-[23px] font-bold">9:30 AM to 6:00 PM</p>
                        <p className="text-[17px] font-medium my-4">Language - Basic English</p>
                        <p className="text-[20px] font-semibold">Register In Next 15:00 Mins</p>

                        <div className="boxes flex gap-3">
                        <div className="black-box bg-[#131313] p-3 rounded-xl text-white flex flex-col items-center">
                            <p className="text-[24px] font-bold">{formatTime().minutes}</p>
                            <p className="text-[12px] font-light">MINUTES</p>
                        </div>

                        <div className="black-box bg-[#131313] p-3 rounded-xl text-white flex flex-col items-center">
                            <p className="text-[24px] font-bold">{`${formatTime().seconds < 10 ? '0' : ''}${formatTime().seconds}`}</p>
                            <p className="text-[12px] font-light">SECONDS</p>
                        </div>
                        </div>

                        <p className="mt-1 text-[17px] font-semibold">Before The Price Go Up To <span className="text-[#FF6B00]">₹8988</span></p>
                        
                    </div>    
                </div>
            </div>

            <p className="text-[18px] font-semibold text-center mt-5 mb-20 lg:flex md:flex hidden">Join me on a transformative journey to unlock your true potential and achieve remarkable success in the ever-evolving <br/> online coaching business landscape.</p>
        </main>
    )
}

