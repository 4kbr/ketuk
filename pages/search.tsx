import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";

export default function Search() {
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
