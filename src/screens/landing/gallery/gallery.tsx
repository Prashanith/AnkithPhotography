import { useState, useEffect } from "react";

function Gallery() {
  const [cols, setCols] = useState(3);

  const images = [
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",

    "/assets/img7.jpg",
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",

    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
  ];

  function splitCols(array: string[], n: number) {
    const result = [];
    for (let i = n; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCols(1);
    } else {
      setCols(3);
    }
  }, []);

  return (
    <div className="bg-primary">
      <div className={`gallery grid grid-cols-${cols} gap-4`}>
        {splitCols(images, cols).map((e) => {
          return (
            <div className="flex flex-col space-y-4 ">
              {e.map((x) => {
                return <img src={x} className="image " />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
