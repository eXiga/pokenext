import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-5">
      <div>
        <input
          className="shadow w-96 appearance-none border rounded py-2 px-2 text-sky-600 leading-tight italic placeholder:italic"
          id="name"
          type="text"
          placeholder="Pokemon name"
        />
      </div>
      <div className="flex flex-row justify-start items-start gap-x-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Search
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          I am lucky!
        </button>
      </div>
    </div>
  );
}
