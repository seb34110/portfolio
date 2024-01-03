"use client";
import Link from "next/link";
import Image from "next/image";
import { Skills } from "../components/skills";
import { Card } from "flowbite-react";

export const CardDev = () => {
  return (
    <Card className="flex flex-col justify-center items-center bg-black max-w h-80">
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
    </Card>
  );
};
