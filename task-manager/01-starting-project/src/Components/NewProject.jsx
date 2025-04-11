import React from "react";
import Input from "./Input";
export default function () {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex item-center justify-end my-4">
        <button className="text-stone-800 hover:text-stone-95">save</button>
        <button className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover :bg-stone-950 ">cancel</button>
      </menu>
      <div>
        <Input label={"Title"}/>
        <Input label={"Description"} textarea/>
        <Input label={"Due Date"}/>
      </div>
    </div>
  );
}
