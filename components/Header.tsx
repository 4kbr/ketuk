import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-600">
      <div className="flex space-x-4 items-center">
        <Link legacyBehavior href="https://about.google/">
          <a className="link">About</a>
        </Link>
        <Link legacyBehavior href="https://store.google.com/">
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com">
          <p className="link">Gmail</p>
        </Link>
        <p
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Image
        </p>
        <User className="" />
      </div>
    </header>
  );
}
