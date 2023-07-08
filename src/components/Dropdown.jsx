import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const Dropdown = ({ dropdownId, placeholder, items, classes, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const makeSelection = (item) => {
    setSelected(item);
    setIsOpen(false);
    onSelect(dropdownId, item);
  };

  const clearSelection = () => {
    setSelected("");
    setIsOpen(false);
    onSelect(dropdownId, null);
  };

  useEffect(() => {
    setSelected("");
  }, [items]);

  return (
    <div className={`${classes} relative`}>
      <button
        className="text-xl text-slate-300 border px-4 py-2 w-64 flex justify-between rounded-md hover:bg-blue-950 transition-all duration-200 active:bg-blue-950 border-blue-900 hover:border-blue-400"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? selected : placeholder}{" "}
        {!isOpen ? (
          <ArrowDropDownRoundedIcon sx={{ fontSize: 28 }} />
        ) : (
          <ArrowDropUpRoundedIcon sx={{ fontSize: 28 }} />
        )}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col">
          {selected && (
            <button
              className="text-xl text-slate-300 border px-4 py-2 w-64 flex justify-between first:rounded-t-md last:rounded-b-md hover:bg-blue-950 hover:border-blue-400 transition-all duration-200 active:bg-blue-950 border-blue-900"
              onClick={() => clearSelection()}
            >
              Clear selection
            </button>
          )}

          {items.map((item, index) => (
            <button
              key={index}
              className="text-xl text-slate-300 border px-4 py-2 w-64 flex justify-between first:rounded-t-md last:rounded-b-md bg-slate-900 hover:bg-blue-950 transition-all duration-200 active:bg-blue-950 border-blue-900 hover:border-blue-400"
              onClick={() => makeSelection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  dropdownId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  classes: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
export default Dropdown;
