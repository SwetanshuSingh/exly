import { useState, useEffect } from "react";

export default function LimitedOffer(){
    const initialTimeInSeconds = 900;
    const [counter, setCounter] = useState(initialTimeInSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    return initialTimeInSeconds;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    return(
        <section className="bg-white lg:px-5 lg:py-3 p-5 flex justify-around gap-20 items-center sticky bottom-0 shadow-offer">
            <div className="price flex flex-col justify-center items-center">
                <div className="flex items-center gap-2 font-1">
                    <h2 className="text-[#FF6B00] lg:text-[32px] text-[25px] font-bold">₹299</h2>
                    <h3 className="text-black lg:text-[21px] text-[15px] line-through font-semibold">₹8988</h3>
                </div>
                <div className="flex items-baseline gap-1 lg:text-[16px] text-[12px]">
                    <h3 className="font-1 font-medium">Offer Ends in</h3>
                    <h3 className="font-0 font-semibold">{formatTime(counter)}</h3>
                </div>
            </div>
            <button className="font-0 bg-[#FF6B00] rounded-full shadow-custom-orange lg:px-10 px-5 py-3 uppercase lg:text-xl text-md text-white font-bold">Join Now</button>
        </section>
    )
}