"use client";
import React, { useState } from "react";
import TopAlbumsInfo from "./TopAlbumsInfo";
import CurrentSongInfo from "./CurrentSongInfo";
import Links from "./Links";
import SearchSong from "../_components/AddSongToQueue";
import AddSongToPublicPlaylist from "../_components/AddSongToPublicPlaylist";

const Overlay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-white">
      <TopAlbumsInfo />
      <CurrentSongInfo />
      <AddSongToPublicPlaylist isOpen={isModalOpen} onClose={closeModal} />
      <Links openModal={openModal} />
    </div>
  );
};

export default Overlay;
