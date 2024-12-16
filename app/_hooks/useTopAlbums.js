import { useEffect } from "react";
import useApiFetch from "./useApiFetch";
import useStore from "../store";

const useTopAlbums = () => {
  const { data: topAlbums } = useApiFetch("/api/lastfm", 10000);
  const setImages = useStore((state) => state.setImages);
  const setSongs = useStore((state) => state.setSongs);

  useEffect(() => {
    if (topAlbums) {
      console.log(topAlbums);
      const images = topAlbums.topAlbums.map((album) => {
        const large = album.image.find((image) => image.size === "extralarge")
        return large["#text"];
      });
      console.log(images);
      setImages(images);
      const songs = topAlbums.topAlbums.map((song) => song);
      setSongs(songs);
    }
  }, [topAlbums, setImages]);
};

export default useTopAlbums;
