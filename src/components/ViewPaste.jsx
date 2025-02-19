import React from "react";
import Navbar from "./Navbar";
import { Copy, PlusCircle } from "react-feather";
import { useParams, Link } from "react-router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const allPastesData = useSelector((state) => state.pasteData.value);
  const { id } = useParams();
  const currentPaste = allPastesData.find((e) => e._id === id);

  return (
    <div>
      <Navbar />
      <div className="w-[70%] mx-auto flex flex-col mt-6 space-y-4">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            value={currentPaste.title}
            className="w-[70%] border rounded-2xl px-4 py-2 cursor-not-allowed"
            disabled
          />
          <Link to="/">
            <button className="h-full bg-purple-900 rounded-2xl px-4 py-1 text-white font-bold">
              <PlusCircle />
            </button>
          </Link>
        </div>
        <div className="bg-gray-700 border rounded-2xl px-1 ">
          <div className="p-1.5 rounded-md flex flex-row justify-between">
            <div className="flex flex-row justify-evenly items-center gap-x-1.5">
              <div className="rounded-full w-[16px] h-[16px] bg-red-400"></div>
              <div className="rounded-full w-[16px] h-[16px] bg-amber-300"></div>
              <div className="rounded-full w-[16px] h-[16px] bg-green-400"></div>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(currentPaste.content);
                toast.success("Content Copies to Clipboard");
              }}
            >
              <Copy />
            </button>
          </div>
          <textarea
            rows={22}
            className="w-full bg-[#242424] resize-none rounded-b-xl p-2 cursor-not-allowed"
            value={currentPaste.content}
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
