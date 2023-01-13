import React from "react";

export default function SearchResults({ result }: { result: any }) {
  console.log(result);

  // console.log(result.searchInformation.formattedSearchTime);

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mb-5 mt-3 ">
        About {result.searchInformation.formattedTotalResults} results (
        {result.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}
