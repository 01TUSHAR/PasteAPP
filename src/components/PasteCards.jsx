import React, { useState } from "react";
import { Calendar, Copy, Download, Edit2, Eye, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste } from "../features/pasteSlice";
import toast from "react-hot-toast";
import { use } from "react";

const PasteCards = (props) => {
  const date = props.createdAt.split("T")[0];
  const dispatch = useDispatch();

  return (
    <div className="w-[100%] flex flex-row border rounded-xl py-3 px-6">
      <div className="w-[50%]">
        <h1 className="font-bold text-3xl text-white ">{props.title}</h1>
        <p className="font-xl text-white">
          {props.content.length > 50
            ? props.content.substring(0, 50) + "..."
            : props.content}
        </p>
      </div>
      <div className="w-[50%] flex flex-col gap-2 items-end">
        <div className="flex flex-row gap-2">
          <button className="border p-1 rounded-md bg-[#242424]">
            <Link to={`/?pasteId=${props.id}`}>
              <Edit2 />
            </Link>
          </button>
          <button
            className="border p-1 rounded-md bg-[#242424]"
            onClick={() => dispatch(deletePaste(props.id))}
          >
            <Trash2 />
          </button>
          <button className="border p-1 rounded-md bg-[#242424]">
            <Download />
          </button>
          <button className="border p-1 rounded-md bg-[#242424]">
            <Link to={`/paste/${props.id}`}>
              <Eye />
            </Link>
          </button>
          <button
            className="border p-1 rounded-md bg-[#242424]"
            onClick={() => {
              navigator.clipboard.writeText(props.content);
              toast.success("Content Copies to Clipboard");
            }}
          >
            <Copy />
          </button>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Calendar />
          <p className="text-white  font-bold ">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PasteCards;
