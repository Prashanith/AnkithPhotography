import { ReactNode } from "react";

function About() {
  return (
    <div className="flex flex-col items-start justify-center tracking-widest">
      <div className="content">
        <div className="w-full lg:w-1/2 relative">
          <img
            src="./assets/profile_4.jpg"
            alt="Ankith Magar Photography, Pre Wedding Wedding Maternity Photography Baby Shower Portrats Stills Candid  Best Photographer in Hyderabad, Amberpet Model Portfolio shoot Makeup photos"
            className="rounded-2xl"
          />
        </div>

        <div className="w-0 lg:w-1/12"></div>

        <div className="w-full lg:w-1/3 text-left lg:pt-10">
          <p className="title text-4xl pb-6 calligraffitti-regular">
            Hey Folks, I am Ankith
          </p>
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

      <div className="mt-10 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col-reverse lg:flex-row justify-center items-start space-x-0 space-y-6 lg:space-x-6 lg:space-y-0">
        <div className="w-full lg:w-1/3 text-left md:pt-10">
          <p className="title text-4xl pb-6 calligraffitti-regular">
            I Specialize In
          </p>
          <p className="aboutText">
            A dedicated portrait Photographer based in Hyderabad, With a passion
            for capturing genuine moments and emotions, I specialize in creating
            stunning portraits that reveal the unique essence of each
            individual.
          </p>
          <p className="aboutText">
            Whether you are looking for a professional headshots, family
            portraits or personal branding images, my goal is to craft beautiful
            , meaningful photographs that tell your story. Lets collaborate and
            create images that resonate and inspire...
          </p>
        </div>

        <div className="w-0 lg:w-1/12"></div>

        <div className="w-full lg:w-1/2 relative">
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
