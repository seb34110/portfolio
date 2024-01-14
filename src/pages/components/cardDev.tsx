import Link from "next/link";
import Image from "next/image";
import { Skills } from "../components/skills";
import { Card } from "flowbite-react";

export const CardDev = () => {
  return (
    <section>
      <Card className="Card rounded-lg border-cyan-500 flex flex-col justify-center items-center max-w max-h">
        <Image
          src="/profile.jpg"
          width={150}
          height={150}
          alt="profileSebastien"
          className="rounded-lg mx-auto mt-5 mb-10"
        />
        <div className="text-center">
          <h1 className=" text-white text-6xl pb-4 mt-5 mb-10">
            Sébastien Wendling
          </h1>
          <h3 className="text-white text-3xl mb-10">
            Développeur web React/WordPress.
          </h3>
        </div>
      </Card>
    </section>
  );
};
export default CardDev;
