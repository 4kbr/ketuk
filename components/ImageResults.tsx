import PaginationButton from "./PaginationButton";

export default function ImageResults({ result: results }: { result: any }) {
  console.log("ini di image");
  console.log(results);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result: any, i: number) => (
          <div key={i} className="mb-8">
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                />
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="truncate text-xl">{result.title}</h2>
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <p className="text-gray-500 ">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
}
