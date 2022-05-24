import React, { useState } from "react";

interface SearchBarProps {
  hasError: boolean;
  onRandomButtonClicked: () => void;
  onSearchButtonClicked: (name: string) => void;
}

export default function SearchBar({
  hasError,
  onRandomButtonClicked,
  onSearchButtonClicked,
}: SearchBarProps) {
  const [name, setName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-5">
      <div>
        <input
          className={`w-96 appearance-none border-2 border-solid rounded py-2 px-2 ${
            hasError ? "border-red-700 outline-red-700" : ""
          } text-sky-600 leading-tight italic placeholder:italic`}
          id="name"
          type="text"
          placeholder="Pokemon name"
          value={name}
          onChange={handleInputChange}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              setName(event.currentTarget.value);
              onSearchButtonClicked(name);
            }
          }}
        />
      </div>
      <div className="flex flex-row justify-start items-start gap-x-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => onSearchButtonClicked(name)}
        >
          Search
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onRandomButtonClicked}
        >
          I am lucky!
        </button>
      </div>
    </div>
  );
}
