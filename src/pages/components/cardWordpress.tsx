import { Card } from "flowbite-react";
import { NeonButton } from "../components/neonButton";
import Link from "next/link";
import Image from "next/image";

export const CardWordpress = () => {
  return (
    <>
      <div className=" mt-10 text-cyan-500 text-4xl flex justify-center">
        <h1>Projets WordPress</h1>
      </div>

      <section className="flex justify-center items-center-y space-x-10">
        <div className="card">
          <Card className="flex ml-10 mt-10 w-60 h-70 bg-#111111 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
            <a href="https://la-fabrique.iteeweb.fr/">
              <Image
                src="/iconsWordpress/laFabrique.jpg"
                width={185}
                height={160}
                alt="la fabrique restaurant"
                className="rounded-lg mt-4 mx-auto"
              />
            </a>

            <div className="p-10">
              <a href="https://la-fabrique.iteeweb.fr/">
                <h5 className="mb-20 flex justify-center text-center text-2xl font-arial text-white dark:text-white">
                  Site vitrine de restaurant
                </h5>
              </a>
              <a
                className="neonButton text-center flex justify-center items-center"
                href="https://la-fabrique.iteeweb.fr/"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton flex justify-center items-center">
                  Visite ici
                </button>
              </a>
            </div>
          </Card>
        </div>

        <div className="card">
          <Card className="ml-10 mt-10 w-60 h-70 bg-#111111 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
            <a href="https://solution-net34.iteeweb.fr/">
              <Image
                src="/iconsWordpress/solutionNet.jpg"
                width={200}
                height={200}
                alt="closMarsault"
                className="rounded-lg mt-4 mx-auto"
              />
            </a>

            <div className="p-10">
              <a href="https://solution-net34.iteeweb.fr/">
                <h5 className="mb-20 flex justify-center text-white text-2xl font-arial text-gray-900 dark:text-white">
                  Site vitrine de nettoyage
                </h5>
              </a>

              <a
                href="https://solution-net34.iteeweb.fr/"
                className="neonButton text-center flex justify-center items-center"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton flex justify-center items-center">
                  Visite ici
                </button>
              </a>
            </div>
          </Card>
        </div>

        <div className="card">
          <Card className="ml-10 mt-10 w-60 h-70 bg-#111111 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
            <a href="https://clos-marsault.iteeweb.fr/">
              <Image
                src="/iconsWordpress/closMarsault.png"
                width={200}
                height={200}
                alt="closMarsault"
                className="rounded-lg mt-4 mx-auto"
              />
            </a>

            <div className="p-10">
              <a href="https://clos-marsault.iteeweb.fr/">
                <h5 className="mb-20 flex justify-center text-white text-2xl font-arial text-gray-900 dark:text-white">
                  Site vitrine chambre hôtes
                </h5>
              </a>

              <a
                href="https://clos-marsault.iteeweb.fr/"
                className="neonButton text-center flex justify-center items-center"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton flex justify-center items-center">
                  Visite ici
                </button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};
