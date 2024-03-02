export default function Testimonial({texta,textb}){
    return <div className="bg-[#F5F5F5]">
        <div className="text-[#FF6B00] text-[100px]">“</div>
        <div className="text-[18px] font-0 font-[400] text-[#454545]">
            {texta}
        </div>
        <div className="flex">
            <img src= "https://marketingaccelerator.in/wp-content/uploads/2023/07/testminail.svg" alt="Image" className="w-14 h-14 mr-2 rounded-full" />
            <div className="font-normal text-[18px] text-black">
            {textb}
            </div>
        </div>
    </div>
}
