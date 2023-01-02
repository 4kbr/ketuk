import React from 'react'
import Header from '../../components/Header'
import {ClientSafeProvider, getProviders, LiteralUnion} from "next-auth/react";
import { GetServerSideProps, NextPage } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';

export default function Signin ({providers}:{providers :Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>|null}) {
  return (
    <>
    <Header/>
    <div className=''>
 
    </div>
    </>
  )
}

export async function getServerSideProps () {
  const providers = await getProviders();
  return {
    props:{providers},
  };
}