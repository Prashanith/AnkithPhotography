import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "react-masonry-list";
import { ANIM_DURATION, ANIM_TYPE } from "../../../config/animConfig";

interface ImageProps {
  src: string;
  alt: string;
}

function Gallery() {
  const [colCount, setColCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  const images: ImageProps[] = [
    {
      src: "./assets/gallery_1.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_2.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_3.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_4.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_5.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_6.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_7.png",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_8.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_9.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_10.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_11.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_12.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_13.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_14.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_15.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_16.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_17.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_18.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_19.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_20.jpg",
      alt: "a forest after an apocalypse",
    },
    {
      src: "./assets/gallery_21.jpg",
      alt: "a forest after an apocalypse",
    },
  ];

  function changeCols() {
    if (innerWidth <= 640) {
      setColCount(1);
    } else if (innerWidth <= 768) {
      setColCount(3);
    } else {
      setColCount(4);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", changeCols);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("resize", changeCols);
    };
  }, []);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="py-[30vh] w-full flex justify-center items-center">
          <img
            src="/assets/loader.svg"
            alt="loadingIcon"
            height={40}
            width={40}
          />
        </div>
      )}
      <Layout
        colCount={colCount}
        minWidth={100}
        gap={10}
        className={` ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity`}
        // className="m-0 p-0 w-full flex flex-wrap justify-center items-center gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
        items={images.map((image) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
              className="box border-2 border-black w-full break-inside-avoid"
            >
              <img className="max-w-full" src={image.src} alt={image.alt} />
            </motion.div>
          );
        })}
      ></Layout>
    </div>
  );
}

export default Gallery;
