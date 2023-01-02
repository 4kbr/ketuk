import React from "react";
import Header from "../../components/Header";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";
import { GetServerSideProps, NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";

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
      <Header />
      <div className="">
        {Object.values(providers!).map((provider, i) => (
          <div key={i} className="">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
              alt="ketuk - google clone"
            />
            <p>This website is created for learning purposes</p>
            <button>Sign in with {provider.name}</button>
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
