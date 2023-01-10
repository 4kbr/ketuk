import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import User from "./User";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleImageClick = () => {
    router.push("/");
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={handleImageClick}
          width={120}
          height={40}
          alt={"Kenook - Search Engine"}
          className="cursor-pointer object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          objectFit="contain"
        />
        <form className="flex border border-gray-400 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon className="h-7" />
          <MicrophoneIcon className="h-6" />
          <SearchIcon className="h-6" />
        </form>
        <User className="ml-auto" />
      </div>
    </header>
  );
}
