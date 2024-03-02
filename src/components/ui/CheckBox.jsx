import { useState } from 'react';

export default function CheckBox({ text }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="lg:w-[562px] w-[370px] p-4 flex gap-2 items-center bg-white border-[#FF6B00] border-dashed border-2 rounded-xl">
            <input
                className={`h-5 w-5 appearance-none rounded active:outline-none focus:outline-none checked:bg-[#FF6B00]`}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <h4>{text}</h4>
        </div>
    );
}
