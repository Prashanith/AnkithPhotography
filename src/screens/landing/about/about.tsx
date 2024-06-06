import "../../../components/gallery/gallery.css";

function About() {
  const data = [
    {
      title: "",
      src: "https://assets.codepen.io/1506195/unsplash-1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis dolore quis esse aut eligendi tenetur dolores facere rerum ex ipsum quam voluptatibus omnis, porro tempora? Nostrum, facere? Tempore, eos.",
    },
    {
      title: "",
      src: "https://assets.codepen.io/1506195/unsplash-1.jpg",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis dolore quis esse aut eligendi tenetur dolores facere rerum ex ipsum quam voluptatibus omnis, porro tempora? Nostrum, facere? Tempore, eos.",
    },
    {
      title: "",
      src: "https://assets.codepen.io/1506195/unsplash-1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facilis dolore quis esse aut eligendi tenetur dolores facere rerum ex ipsum quam voluptatibus omnis, porro tempora? Nostrum, facere? Tempore, eos.",
    },
  ];
  return (
    <div className="px-6 sm:p-0 sm:m-0 flex flex-col items-start justify-center space-y-36">
      <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-between items-start">
        <img
          src="https://images.pexels.com/photos/1082663/pexels-photo-1082663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="grayscale w-full sm:w-1/2"
        />
        <div className="bg-secondary text-black w-full sm:w-1/2 p-8 mt-6 sm:mt-32 opacity-70">
          <p className="w-full text-lg text-left">
            <span className="title text-xl font-fancy sm:text-3xl ">
              Hey Folks, I am Ankith
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            maiores in quod consequuntur sunt quae mollitia nisi aut impedit
            dolore quibusdam sed praesentium nobis, aliquid placeat est ratione
            dicta perferendis?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            maiores in quod consequuntur sunt quae mollitia nisi aut impedit
            dolore quibusdam sed praesentium nobis, aliquid placeat est ratione
            dicta perferendis?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis,
            officia fugit modi rerum ex assumenda, quas dolore ipsam natus
            error, nobis tempore numquam molestiae deserunt nulla alias
            repudiandae molestias!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            minima illo necessitatibus nisi quisquam sunt quod explicabo saepe
            soluta? Voluptas eius atque aperiam molestias similique eveniet quod
            nisi officia minima.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start space-x-6">
        <div className="bg-secondary text-black w-full sm:w-1/2 p-8 opacity-70">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            maiores in quod consequuntur sunt quae mollitia nisi aut impedit
            dolore quibusdam sed praesentium nobis, aliquid placeat est ratione
            dicta perferendis?
          </p>
        </div>
        <div className="gallery w-full sm:w-1/2 aspect-square">
          <img src="https://assets.codepen.io/1506195/unsplash-1.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-7.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-3.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-2.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-6.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-0.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-8.jpg" alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-10 items-center">
        <div>
          <p className="text-4xl uppercase text-center">THIS BEST DESCRIBES WHAT I DO</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-10 sm:space-x-16">
          {data.map((d) => {
            return (
              <div className="works flex flex-col justify-center items-center hover:scale-125 w-full sm:w-1/3">
                <div className="title mb-8">{d.title}</div>
                <div className="mb-8">
                  <img src={d.src} alt="" className="grayscale" />
                </div>
                <p>{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
