import React, { useState } from "react";
import Navbar from "./Navbar";
import PasteCards from "./PasteCards";
import { useDispatch, useSelector } from "react-redux";
import { resetAllPaste } from "../features/pasteSlice";

const Paste = () => {
  const allPastesData = useSelector((state) => state.pasteData.value);
  const [searchTitle, setSearchTitle] = useState("");
  const filteredData = allPastesData.filter((e) =>
    e.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  const dispatch = useDispatch();
  function handleAllDelete() {
    if (confirm("Are you sure want to delete ALL Pastes!!")) {
      dispatch(resetAllPaste());
    }
  }

  return (
    <div>
      <Navbar />
      <div className="w-[55%] h-[100%] m-5  flex flex-col mx-auto space-y-4">
        <div className="flex flex-row justify-between">
          <input
            type="search"
            className="w-[60%] border rounded-2xl px-4 py-2"
            placeholder="Search Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          

          <button
            className="bg-purple-900 rounded-2xl px-4 py-1 text-white font-bold "
            onClick={handleAllDelete}
          >
            Delete All Pastes
          </button>
        </div>
        {/* mapping data from local storage to show all pastes */}
        {filteredData.length > 0 &&
          filteredData.map((e) => {
            return (
              <PasteCards
                title={e.title}
                content={e.content}
                key={e._id}
                createdAt={e.createdAt}
                id={e._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
