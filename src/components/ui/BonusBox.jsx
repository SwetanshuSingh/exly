export default function BonusBox({text}){
    return (
        <div className="w-[364px] h-[168px] p-5 flex items-center justify-center font-0 shadow-svg-box rounded-xl gap-3">
            <div className="border-gray-300 border-2 border-dashed p-4 rounded-xl w-full h-full flex flex-col justify-between">
                <p className="text-[17px] font-semibold">{text}</p>
                <p className="text-[19px] text-[#FF6B00] font-bold">Priced At: 499/-</p>
            </div>
            <div className="h-full w-[43px] bg-[#FF6B00] flex flex-row items-center justify-center rounded-xl"><p className="text-[23px] font-bold text-white rotate-90">499/-</p></div>
        </div>
    )
}