import { useRouter } from "next/router";
import React from "react";

export default function SearchOption(state: SearchOptionModel) {
  const router = useRouter();
  function handleSelect(value: string) {
    router.push(`/search?term=${router.query.term}&searchType=${value}`);
  }
  return (
    <div
      onClick={() => handleSelect(state.value)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-400 cursor-pointer hover:border-blue-400 transition duration-300 pb-3 ${
        state.selected && "text-blue-400 border-blue-400"
      }`}
    >
      <state.Icon className="h-4" />
      <p>{state.title}</p>
    </div>
  );
}

interface SearchOptionModel {
  title: string;
  value: string;
  Icon: React.ElementType;
  selected: boolean;
}
