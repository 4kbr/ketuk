import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import SearchOption from "./SearchOption";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-600 lg:pl-52 lg:justify-start border-b">
      <SearchOption
        title={"All"}
        Icon={SearchIcon}
        value={""}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchOption
        title={"Images"}
        value={"image"}
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
