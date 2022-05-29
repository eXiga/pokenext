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
          className={`input ${
            hasError ? "input-error" : "input-success"
          } input-bordered w-96 leading-tight italic placeholder:italic`}
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
          className="btn btn-primary"
          type="button"
          onClick={() => onSearchButtonClicked(name)}
        >
          Search
        </button>
        <button
          className="btn btn-accent"
          type="button"
          onClick={onRandomButtonClicked}
        >
          I am lucky!
        </button>
      </div>
    </div>
  );
}
