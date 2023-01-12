import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  /**
   *
   * @param event
   * @returns
   * this function use for handle clicked google search
   */
  function search(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const term = searchInputRef.current?.value;
    console.log("term is " + term);
    // alert("term is " + term);
    if (!term?.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  return (
    <div>
      <Head>
        <title>Keenook</title>
        <meta name="description" content="Search Engine UWU" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      {/* Header */}
      <Header />
      {/* Close Header */}

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          className="object-cover"
          width="300"
          objectFit="cover"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt={"Kenook - Search Engine"}
        />
        <div
          className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg
          sm:max-w-xl lg:max-w-2xl
        px-5 py-3 rounded-full items-center
        "
        >
          <SearchIcon className="h-5 text-gray-500 mr-4 cursor-pointer" />
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={(e) => e.preventDefault()} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      {/* Close Body */}

      {/* Footer */}
      <Footer />
      {/* Close Footer */}
    </div>
  );
};

export default Home;
