"use client";
import React, { useState } from "react";
import TopAlbumsInfo from "./TopAlbumsInfo";
import CurrentSongInfo from "./CurrentSongInfo";
import Links from "./Links";
import SearchSong from "../_components/AddSongToQueue";
import AddSongToPublicPlaylist from "../_components/AddSongToPublicPlaylist";

const Overlay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openModal2 = () => setIsModal2Open(true);
  const closeModal = () => setIsModalOpen(false);
  const closeModal2 = () => setIsModal2Open(false);

  return (
    <div className="text-white">
      <TopAlbumsInfo />
      <CurrentSongInfo />
      <Links openModal2={openModal2} openModal={openModal} />
    </div>
  );
};

export default Overlay;
