import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { ConstantVar } from "../constant/ConstantVar";
import DummyResponse from "../DummyResponse";

export default function Search({ results }: { results: Object }) {
  console.log("result is");
  console.log(results);

  const router = useRouter();
  let titleText: string = router.query.term + " - Search page";
  return (
    <div>
      <Head>
        <title>{titleText}</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Header - CLOSE */}

      {/* Search all and images Result */}
      {router.query.searchType === "image" ? (
        <ImageResults result={results} />
      ) : (
        <SearchResults result={results} />
      )}
      {/* Search Result - CLOSE */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
    ? DummyResponse
    : await fetch(
        `${ConstantVar.google}?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
