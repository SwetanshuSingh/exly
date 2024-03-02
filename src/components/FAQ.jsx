import AccordionComponent from "./Accordian";

export default function Faq(){
    return (
        <section className="h-full w-full lg:p-12 px-[20px] py-[50px] flex flex-col items-center font-0 gap-4">
            <h2 className="text-[38px] font-bold text-center">Frequently Asked Questions</h2>
            <div className="bg-[#FF6B00] h-1 w-16"></div>

            <AccordionComponent />
        </section>
    )
}