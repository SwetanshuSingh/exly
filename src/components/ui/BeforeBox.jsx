import Cross from "../../assets/svgs/Cross";

export default function BeforeBox(){
    return (
        <div className="bg-white lg:w-[550px] min-h-[436px] h-full p-4 pb-5 rounded-xl flex flex-col gap-2">
            <div className="text-[26px] text-[#FF6B00] bg-[#FFEADB] rounded-xl text-center font-semibold py-2">BEFORE</div>
                <div className="text-[18px] border-b border-gray-300 py-2 flex items-center gap-2">
                    <Cross />
                    Not being seen by many people online
                </div>

                <div className="text-[18px] border-b border-gray-300 py-2 flex items-center gap-2">
                    <Cross />
                    Feeling overwhelmed with marketing tasks
                </div>

                <div className="text-[18px] border-b border-gray-300 py-2 flex items-center gap-2">
                    <Cross />
                    Struggling to find the right audience
                </div>

                <div className="text-[18px] border-b border-gray-300 py-2 flex items-center gap-2">
                    <Cross />
                    Having a weak or unclear brand presence
                </div>

                <div className="text-[18px] border-b border-gray-300 py-2 flex items-center gap-2">
                    <Cross />
                    Difficulty in growing and making money
                </div>

                <div className="text-[18px] py-2 pb-4 flex items-center gap-2">
                    <Cross />
                    Challenges in measuring marketing results
                </div>
            
        </div>
    )
}