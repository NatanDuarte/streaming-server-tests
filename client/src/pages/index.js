import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import VideoPlayer from '@/components/video-player';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>zrgstxt</p>
        <VideoPlayer src={"http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8"} />
      </main>
    </>
  );
}