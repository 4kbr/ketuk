import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import { ConstantVar } from "../constant/ConstantVar";
import DummyResponse from "../DummyResponse";

export default function Search(results: SearchModel) {
  console.log("result is");
  console.log(results);

  const router = useRouter();
  let titleText: string = "Search for - " + router.query.term;
  return (
    <div>
      <Head>
        <title>{titleText}</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Header - CLOSE */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mockData = true;
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

interface SearchModel {
  context: Object;
  items: [];
  kind: string;
  queries: Object;
  searchInformation: Object;
}
