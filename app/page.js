"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [decs, setdecs] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, decs }]);
    settitle("");
    setdecs("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-center justify-between mb-5">
          <div className="flex justify-between  w-1/2 ">
            <h5 className=" mb-3 text-2xl font-bold  ">{t.title}</h5>
            <h6 className=" mb-3 text-lg font-bold">{t.decs}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 rounded px-4 py-2 font-bold text-white "
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white  text-4xl  p-5 text-center">
        Himanshu TO-DO List
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-10 p-2 px-10"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-10 p-2 px-10"
          placeholder="Enter Discription Here"
          value={decs}
          onChange={(e) => {
            setdecs(e.target.value);
          }}
        />
        <button className="bg-black text-white px-5 py-2 rounded text-2xl font-bold m-5">
          Add Task
        </button>
      </form>

      <div className="p-6 bg-slate-200 text-center">
        <ul>{renderTask}</ul>
      </div>
      <hr />
    </>
  );
};

export default page;
