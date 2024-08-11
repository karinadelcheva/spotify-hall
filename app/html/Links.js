"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import useStore from "../store";

const Links = () => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const monitorIndex = useStore((state) => state.monitorIndex);
  const isVinylSelected = useStore((state) => state.isVinylSelected);

  console.log("monitorIndex", monitorIndex);
  console.log("isVinylSelected", isVinylSelected);

  useEffect(() => {
    if (link1Ref.current && link2Ref.current) {
      gsap.set([link1Ref.current, link2Ref.current], { x: -200, opacity: 0 }); // set initial position
      gsap.to([link1Ref.current, link2Ref.current], {
        x: 0,
        opacity: 1,
        delay: 5.5,
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.25,
      });
    }
  }, [link1Ref, link2Ref]);

  return (
    (!monitorIndex && !isVinylSelected) && (
      <div className="absolute bottom-2 left-2 z-10 md:bottom-10 md:left-10">
        <div className="flex flex-col gap-1 text-base md:gap-4 md:text-lg">
          <Link
            ref={link1Ref}
            target="_blank"
            href={"https://portfolio-flame-tau-43.vercel.app/"}
          >
            <span className="flex items-center gap-2">
              Portfolio <FiArrowUpRight />
            </span>
          </Link>
          <Link
            ref={link2Ref}
            target="_blank"
            href={
              "https://open.spotify.com/user/mot%C3%B6rkafa?si=ueGATfW7SXuE12f1i54p9w"
            }
          >
            <span className="flex items-center gap-2">
              Spotify Profile <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    )
  );
};

export default Links;