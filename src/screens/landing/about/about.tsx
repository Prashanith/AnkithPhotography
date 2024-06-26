import { ReactNode } from "react";

function About() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="content">
        <div className="w-full sm:w-1/3 relative">
          <img
            src="./assets/profile_4.jpg"
            alt="Ankith Magar Photography, Pre Wedding Wedding Maternity Photography Baby Shower Portrats Stills Candid  Best Photographer in Hyderabad, Amberpet Model Portfolio shoot Makeup photos"
            className="rounded-2xl"
          />
        </div>

        <div className="w-0 sm:w-1/12"></div>

        <div className="w-full sm:w-1/3 text-left sm:pt-10">
          <p className="title text-4xl pb-6">Hey Folks, I am Ankith</p>
          <p className="aboutText">
            Step into a world where moments become timeless memories through
            photography.
          </p>
          <p className="aboutText">
            I specialize in weddings, pre-weddings, children, babies,
            pre-birthdays, maternity, portfolios, and portraits.
          </p>
          <p className="aboutText">
            With creativity and care, I capture the essence of each
            occasion—from family bonds to wedding joy—delivering authentic,
            emotive images.
          </p>
          <p className="aboutText">
            Let's collaborate to create stunning photographs that capture the
            beauty of your special moments.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex flex-col-reverse sm:flex-row justify-center items-start space-x-0 space-y-6 sm:space-x-6 sm:space-y-0">
        <div className="w-full sm:w-1/3 text-left sm:pt-10">
          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            maiores in quod consequuntur sunt quae mollitia nisi aut impedit
            dolore quibusdam sed praesentium nobis, aliquid placeat est ratione
            dicta perferendis?
          </p>
          <p className="aboutText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            rem odit eaque consectetur amet expedita distinctio necessitatibus
            laboriosam quis, ipsum doloremque possimus cumque delectus, alias
            mollitia quae magni! Totam, ratione!
          </p>
        </div>

        <div className="w-0 sm:w-1/12"></div>

        <div className="w-full sm:w-1/3 relative">
          <img
            src="./assets/profile_5.jpeg"
            alt="Ankith Magar Photography, Pre Wedding Wedding Maternity Photography Baby Shower Portrats Stills Candid  Best Photographer in Hyderabad, Amberpet Model Portfolio shoot Makeup photos"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

interface IAboutContentProps {
  imagePath: string;
  children: ReactNode;
}

function AboutContent({ imagePath, children }: IAboutContentProps) {
  return <div></div>;
}

export default About;
