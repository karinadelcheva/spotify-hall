"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useStore from "../store";
import PropTypes from "prop-types";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Links = ({ openModal }) => {
  const link1Ref = useRef(null);
  const modal = useRef(null);
  const modal2 = useRef(null);
  const monitorIndex = useStore((state) => state.monitorIndex);
  const isVinylSelected = useStore((state) => state.isVinylSelected);

  useEffect(() => {
    if (modal.current && modal2.current && link1Ref.current) {
      gsap.set([modal.current, modal2.current, link1Ref.current], {
        x: -200,
        opacity: 0,
      });
      gsap.to([modal.current, modal2.current, link1Ref.current], {
        x: 0,
        opacity: 1,
        delay: 2.5,
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.35,
      });
    }
  }, [modal, modal2, link1Ref]);

  return (
    !monitorIndex &&
    monitorIndex !== 0 &&
    !isVinylSelected && (
      <>
        <div className="absolute bottom-2 left-2 z-10 md:bottom-10 md:left-10">
          <div className="flex flex-col gap-2 text-base font-semibold drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] md:gap-1 md:text-lg">
             <button
              ref={modal}
              onClick={openModal}
              className="text-start text-red-500 transition-colors duration-300 hover:cursor-pointer hover:text-spotify-green"
            >
               HAPPY BIRTHDAY MOMCHI!🎉
            </button>
           
            <Link
              ref={link1Ref}
              target="_blank"
              href={
                "https://www.last.fm/user/momchino"
              }
            >
              <span className="group flex items-center gap-1 transition-all duration-300 hover:gap-2">
                LASTFM Profile{" "}
                <FiArrowUpRight className="transition-all duration-300 group-hover:-mt-1 group-hover:text-red-500" />
              </span>
            </Link>
          </div>
        </div>
      </>
    )
  );
};

Links.propTypes = {
  openModal: PropTypes.func.isRequired,
  openModal2: PropTypes.func.isRequired,
};
export default Links;
