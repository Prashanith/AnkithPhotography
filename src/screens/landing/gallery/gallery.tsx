import { motion } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
}

function Gallery() {
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
  return (
    <div className="m-0 p-0 w-full flex flex-wrap justify-center items-center gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {images.map((image) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" border-4"
          >
            <img
              className="galleryImage"
              src={image.src}
              alt={image.alt}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Gallery;
