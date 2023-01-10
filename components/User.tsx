/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }: { className: string }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          className={`w-10 h-10 rounded-full hover:bg-gray-100 cursor-pointer p-1 ${className}`}
          src={session.user!.image!}
          alt={"KETUK USER - " + session.user?.name}
        />
        <button className="bg-blue-400 p-4" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-400 px-3 py-1 rounded-md text-white hover:bg-blue-100 ${className}`}
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
