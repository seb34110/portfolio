"use client";
import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";

export const CardDev = () => {
  return (

    <Card className="flex flex-col justify-center items-center bg-black max-w h-80">
      <img
        src="./logoSWC.jpg"
        alt="Logo SWC"
        className="w-28 h-28 rounded-full mx-auto mb-15"
      />
      <div className="text-center">
        <h1 className="text-gradient-from-red-to-blue text-6xl pb-4 mt-5 mb-15">
          Sébastien Wendling
        </h1>
        <h3 className="text-gradient-from-blue-to-red text-3xl mb-1">
          Développeur web React/Next.Js.
        </h3>
      </div>

    <Card className="border-cyan-500 flex flex-col justify-center items-center bg-black max-w max-h">
      <Image
        src="/profile.jpg"
        width={200}
        height={200}
        alt="profileSebastien"
        className="mx-auto mt-5"
      />
      <section className="text-center">
        <h1 className=" text-6xl pb-4 mt-5 mb-15">Sébastien Wendling</h1>
        <h3 className="text-3xl mb-1">Développeur web React/Next.Js.</h3>
      </section>
      <br />
      <Skills />
>>>>>>> Stashed changes
    </Card>
  );
};
