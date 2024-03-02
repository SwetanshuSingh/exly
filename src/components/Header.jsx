// eslint-disable-next-line react/prop-types
export default function Headerbox({text}) {
    return (
      <div className="bg-[#FFDEC6] px-6 py-4 rounded-b-2xl w-fit justify-center text-center">
        <div className="text-[#FF6B00] font-0 font-[800] text-[15px] lg:text-[17px] uppercase">
          {text}
        </div>
      </div>
    );
  }
  