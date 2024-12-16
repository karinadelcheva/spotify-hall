import { useEffect } from "react";
import useApiFetch from "./useApiFetch";
import useStore from "../store";

const useTopTracks = () => {
  const { data: topTracks } = useApiFetch("/api/lastfm", 10000);
  const setImages = useStore((state) => state.setImages);
  const setSongs = useStore((state) => state.setSongs);

  useEffect(() => {
    if (topTracks) {
      console.log(topTracks);
      const images = topTracks.topTracks.map((track) => {
        const large = track.image.find((image) => image.size === "medium")
        return large["#text"];
      });
      console.log(images);
      setImages(images);
      const songs = topTracks.topTracks.map((song) => song);
      setSongs(songs);
    }
  }, [topTracks, setImages]);
};

export default useTopTracks;
