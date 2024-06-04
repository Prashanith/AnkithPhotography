function About() {
  return (
    <div className="px-6 sm:p-0 sm:m-0 gap-6 flex flex-col items-start justify-center space-x-5">
      <div className="flex flex-row justify-between items-start">
        <img
          src="https://images.pexels.com/photos/1082663/pexels-photo-1082663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="grayscale w-full sm:w-1/2"
        />
        <div className="bg-secondary text-black w-full sm:w-1/2 p-8 mt-32 opacity-70">
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

      <div className="content">
        <p className="sm:w-1/2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          maiores in quod consequuntur sunt quae mollitia nisi aut impedit
          dolore quibusdam sed praesentium nobis, aliquid placeat est ratione
          dicta perferendis?
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          rem odit eaque consectetur amet expedita distinctio necessitatibus
          laboriosam quis, ipsum doloremque possimus cumque delectus, alias
          mollitia quae magni! Totam, ratione!
        </p>
        <img
          src="https://images.pexels.com/photos/1082663/pexels-photo-1082663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="grayscale sm:w-1/2 aspect-square"
        />
      </div>
    </div>
  );
}

export default About;
