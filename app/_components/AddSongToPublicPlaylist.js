import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { FaExternalLinkAlt, FaRegWindowClose } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import PropTypes from "prop-types";
import Image from "next/image";

const AddSongToPublicPlaylist = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      gsap.to(ref.current, {
        opacity: 1,
        duration: 0.45,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => setIsVisible(false),
      });
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return <div ref={ref}></div>;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative mx-auto flex w-full max-w-md flex-col gap-4 rounded-sm bg-white/10 p-6 shadow-lg">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-xl font-bold text-white md:text-2xl">
            Happy Birthday, Momchi! 
          </h1>
          <p
          className="text-large items-center text-red-500 md:text-xl">
          This was meant to be the Musical Library of Momchi 
          but it turned out to be a bit impossible.
          </p>
          <p>For now, you can just browse your top albums ever on LastFM!</p>
          
        </div>
        </div>
    </div>
  );
};

AddSongToPublicPlaylist.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddSongToPublicPlaylist;
