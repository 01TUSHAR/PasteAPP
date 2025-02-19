import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Copy } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { createPaste, updatePaste } from "../features/pasteSlice";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

// useSelector((state)=> state.reducerName(in store).value)

const Home = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [searchParam, setSearchParams] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const allPastes = useSelector((state) => state.pasteData.value);


  const dispatch = useDispatch();


  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setContent(paste.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [pasteId]);


  function handleCreatePaste() {
    const pasteData = {
      _id: pasteId || Date.now().toString(36),
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
    };
    if (title === "" || content === "") {
      return toast("Empty Paste");
    } else if (pasteId) {
      dispatch(updatePaste(pasteData));
    } else {
      dispatch(createPaste(pasteData));
    }
    setTitle("");
    setContent("");
    setSearchParams("");
  }

  return (
    <div>
      <Navbar />
      <div className="w-[70%] mx-auto flex flex-col mt-6 space-y-4">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="w-[70%] border rounded-2xl px-4 py-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <button
            className="bg-purple-900 rounded-2xl px-4 py-1 text-white font-bold"
            onClick={handleCreatePaste}
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>
        <div className="bg-gray-700 border rounded-2xl px-1 ">
          <div className="p-1.5 rounded-md flex flex-row justify-between">
            <div className="flex flex-row justify-evenly items-center gap-x-1.5">
              <div className="rounded-full w-[16px] h-[16px] bg-red-400"></div>
              <div className="rounded-full w-[16px] h-[16px] bg-amber-300"></div>
              <div className="rounded-full w-[16px] h-[16px] bg-green-400"></div>
            </div>
            <Copy />
          </div>
          <textarea
            rows={22}
            className="w-full bg-[#242424] resize-none rounded-b-xl p-2"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
