import { useState, useEffect } from "react";

const ButtonGroup = ({ buttonList, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(buttonList[0]);

  const handleSelection = (button) => {
    setSelectedOption(button);
    onSelect(button);
  };

  return (
    <div className="flex">
      {buttonList.map((button) => (
        <button
          className={`text-xl text-slate-200 border p-2 w-48 first:rounded-l-lg last:rounded-r-lg hover:bg-blue-800/25 transition-all duration-200 active:bg-blue-950 ${
            selectedOption.selects === button.selects
              ? "border-blue-400"
              : "border-blue-900"
          }`}
          key={button.id}
          onClick={() => handleSelection(button)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};
export default ButtonGroup;
