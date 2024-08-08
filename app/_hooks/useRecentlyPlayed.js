import React, { useEffect } from "react";
import useApiFetch from "./useApiFetch";
import useStore from "../store";

const useRecentlyPlayed = () => {
  const { data: recentSongs } = useApiFetch("/api/spotify", 60000);
  const setImages = useStore((state) => state.setImages);
  const setSongs = useStore((state) => state.setSongs);

  useEffect(() => {
    if (recentSongs) {
      const images = recentSongs.recentlyPlayed.map(
        (song) => song.track.album.images[1].url,
      );
      setImages(images);
      const songs = recentSongs.recentlyPlayed.map((song) => song.track);
      setSongs(songs);
      // console.log(songs);
    }
  }, [recentSongs, setImages]);
};

export default useRecentlyPlayed;