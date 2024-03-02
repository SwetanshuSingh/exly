import Bonusbox from "./ui/BonusBox";
import SpecialPriceBox from "./ui/SpecialPriceBox";

export default function Bonus(){
    return (
        <section className="w-full h-full flex flex-col items-center gap-4 font-0 lg:px-[70px] lg:py-[20px] px-[20px] py-[50px]">
            <h2 className="text-[38px] font-bold">Bonuses</h2>
            <div className="bg-[#FF6B00] h-1 w-16"></div>

            <div className="wrapper flex flex-col gap-7 mt-5">
                <div className="boxes lg:flex lg:flex-row flex-col lg:items-center gap-6">
                    <Bonusbox text="Community Marketing Ebook" />
                    <Bonusbox text="Sales Email Templates" />
                    <Bonusbox text="20 Ways To Create User Generated Content" />
                </div>

                <div className="boxes lg:flex lg:flex-row flex-col lg:items-center gap-6">
                    <Bonusbox text="Content Style And Power Words" />
                    <Bonusbox text="Facebook Group Nurturing Strategy" />
                    <Bonusbox text="Brand Colour Palette For Coaches" />
                </div>

                <div className="lg:flex lg:flex-row flex-col lg:items-center gap-6">
                    <Bonusbox text="Online Reputation Management Message Templates" />
                    <Bonusbox text="Social Media Posts Design Specification For All Platforms" />
                    <Bonusbox text="Key Metrics For Organic Growth Measurement Based On Platforms" />
                </div>

                <div className="boxes lg:flex lg:flex-row flex-col lg:items-center gap-6">
                    <Bonusbox text="Copywriting 101 E-Book" />
                    <Bonusbox text="Blueprint To Create Kickass YouTube Thumbnails" />
                </div>
            </div>
            
            <SpecialPriceBox />
        </section>
    )
}