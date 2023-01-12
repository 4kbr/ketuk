import React from "react";
import { JsxElement } from "typescript";

export default function SearchOption({
  title,
  Icon,
  selected,
}: {
  title: string;
  Icon: React.ElementType;
  selected: boolean;
}) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-400 cursor-pointer hover:border-blue-400 transition duration-300 pb-3 ${
        selected && "text-blue-400 border-blue-400"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
