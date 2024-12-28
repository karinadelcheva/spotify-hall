"use client";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import useStore from "../store";
import Link from "next/link";
import { FaExternalLinkAlt, FaRegWindowClose } from "react-icons/fa";

const TopTracksInfo = () => {
  const songs = useStore((state) => state.songs);
  const monitorIndex = useStore((state) => state.monitorIndex);
  const setMonitorIndex = useStore((state) => state.setMonitorIndex); // Access the function to update monitorIndex
  const selectedSong =
    monitorIndex !== null && monitorIndex >= 0 && monitorIndex < songs.length
      ? songs[monitorIndex]
      : null;
  console.log(selectedSong)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true }).replace("about ", "");
  };

  const closeSongInfo = () => {
    setMonitorIndex(null);
  };

  return (
    <>
      {selectedSong && (
        <div className="fixed bottom-10 left-1/2 z-10 w-full max-w-md -translate-x-1/2 bg-white/10 p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="truncate text-2xl font-bold">
              {selectedSong.name}
            </h2>
            <button className="text-2xl font-bold" onClick={closeSongInfo}>
              <FaRegWindowClose className="hover:text-gray-300" />
            </button>
          </div>
          <div className="mb-2 truncate text-lg font-semibold">
            {selectedSong.artist.name}
          </div>
          <div className="flex items-center">
            <div className="flex-1 text-lg">
              <span>Played {selectedSong.playcount} times</span> 
            </div>
            {/* <div className="text-xl">
              <Link
                target="_blank"
                href={selectedSong.track.external_urls.spotify}
              >
                <FaExternalLinkAlt className="hover:text-gray-300" />
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TopTracksInfo;
