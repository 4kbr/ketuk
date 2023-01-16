import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
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

      {/* Search Result */}
      <SearchResults result={results} />
      {/* Search Result - CLOSE */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mockData = false;
  const data = mockData
    ? DummyResponse
    : await fetch(
        `${ConstantVar.google}?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};

// export interface SearchModel {
//   context: object;
//   items: [];
//   kind: string;
//   queries: object;
//   searchInformation: object;
//   url: object;
// }
