/* eslint-disable react/prop-types */

import ListItems from "./ListItems";

export const Accordian = ({ title, open, setOpen }) => {
  return (
    <div className="w-64 mx-auto  font-bold flex items-start justify-between flex-col">
      <div className="flex items-start flex-col mx-3">
        <button
          className="text-gray-700 px-1 my-1 rounded-md cursor-pointer"
          onClick={setOpen}
        >
          {open ? `- ${title}` : `+ ${title}`}
        </button>
        {open && <ListItems />}
      </div>
    </div>
  );
};
