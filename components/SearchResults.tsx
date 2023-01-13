import Parser from "html-react-parser";
export default function SearchResults({ result: results }: { result: any }) {
  console.log(results);

  // console.log(result.searchInformation.formattedSearchTime);

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mb-5 mt-3 ">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result: any, i: number) => (
        <div key={i} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-500 truncate text-xl font-medium text-blue-500"
              href={result.link}
            >
              <h2>{result.title}</h2>
            </a>
            <p className="text-gray-700">{Parser(result.htmlSnippet)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
