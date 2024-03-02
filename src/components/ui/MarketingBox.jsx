import TickFill from "../../assets/svgs/TickFill";

// eslint-disable-next-line react/prop-types
export default function MarketingBox({text}){
    return (
        <div className="lg:w-[560px] lg:h-[64px] h-[70px] p-5 bg-white font-0 flex items-center justify-start gap-3 rounded-xl shadow-marketing-box">
            <TickFill />
            <p className="text-[17px]">{text}</p>
        </div>
    )
}