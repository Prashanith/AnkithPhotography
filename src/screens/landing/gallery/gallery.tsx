import { motion } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
}

function Gallery() {
  const images: ImageProps[] = [
    {
      src: "https://picsum.photos/id/1028/300/300",
      alt: "a forest after an apocalypse",
    },
    {
      src: "https://picsum.photos/id/15/300/300",
      alt: "a waterfall and many rocks",
    },
    {
      src: "https://picsum.photos/id/1040/300/300",
      alt: "a house on a mountain",
    },
    {
      src: "https://picsum.photos/id/106/300/300",

      alt: "sime pink flowers",
    },
    {
      src: "https://picsum.photos/id/136/300/300",
      alt: "big rocks with some trees",
    },
    {
      src: "https://picsum.photos/id/1039/300/300",
      alt: "a waterfall, a lot of tree and a great view from the sky",
    },
    {
      src: "https://picsum.photos/id/110/300/300",
      alt: "a cool landscape",
    },
    {
      src: "https://picsum.photos/id/1047/300/300",
      alt: "inside a town between two big buildings",
    },
    {
      src: "https://picsum.photos/id/1057/300/300",
      alt: "a great view of the sea above the mountain",
    },
  ];
  return (
    <div className="m-0 p-0 w-full flex flex-wrap justify-center items-center gap-12 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {images.map((image) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" border-4"
          >
            <img
              className="galleryImage aspect-square"
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
