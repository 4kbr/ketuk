/* eslint-disable @next/next/no-img-element */
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import Header from "../../components/Header";
import { BuiltInProviderType } from "next-auth/providers";
import Head from "next/head";
import Image from "next/image";

export default function Signin({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) {
  return (
    <>
      <Head>
        <title>KETUK - Sign In </title>
      </Head>
      <Header />
      <div className="mt-40">
        {Object.values(providers!).map((provider, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src={
                "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
              }
              alt={"ketuk - google clone"}
            />
            <p className="italic text-sm my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-300 p-3 rounded-lg text-white hover:bg-red-500 transition duration-300"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
