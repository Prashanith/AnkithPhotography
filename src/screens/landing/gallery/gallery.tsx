import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "react-masonry-list";
import { ANIM_DURATION, ANIM_TYPE } from "../../../config/animConfig";
import { useParams } from "react-router-dom";

interface ImageProps {
  src: string;
  alt: string;
  type: ImageType;
}

enum ImageType {
  Any,
  PreWedding,
  Portrait,
  Prebirthday,
}

function Gallery() {
  const params = useParams();
  const [colCount, setColCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryType, setGalleryType] = useState(ImageType.Any);

  function mapParamtoEnum(param: string) {
    switch (param) {
      case "preWedding":
        return ImageType.PreWedding;
      case "portrait":
        return ImageType.Portrait;
      case "preBirthday":
        return ImageType.Prebirthday;
      default:
        return ImageType.Any;
    }
  }

  const images: ImageProps[] = [
    {
      src: "../assets/gallery_1.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_2.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_3.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_4.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_5.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_6.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_7.png",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_8.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_9.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_10.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_11.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_12.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_13.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.PreWedding,
    },
    {
      src: "../assets/gallery_14.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_15.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_16.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_17.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Prebirthday,
    },
    {
      src: "../assets/gallery_18.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Prebirthday,
    },
    {
      src: "../assets/gallery_19.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_20.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
    },
    {
      src: "../assets/gallery_21.jpg",
      alt: "a forest after an apocalypse",
      type: ImageType.Portrait,
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
    const type: ImageType = mapParamtoEnum(params["type"] ?? "any");
    setGalleryType(type);
    changeCols();
    window.addEventListener("resize", changeCols);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("resize", changeCols);
    };
  }, [params]);

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
        items={images
          .filter((x) =>
            galleryType == ImageType.Any ? true : x.type == galleryType
          )
          .map((image) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: ANIM_DURATION, type: ANIM_TYPE }}
                className="box  hover:scale-110 transition-all duration-200 w-full break-inside-avoid"
              >
                <img className="max-w-full shadow-lg rounded-md" src={image.src} alt={image.alt} />
              </motion.div>
            );
          })}
      ></Layout>
    </div>
  );
}

export default Gallery;
