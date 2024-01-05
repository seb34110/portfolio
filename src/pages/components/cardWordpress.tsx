import { Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export const CardWordpress = () => {
  return (
    <>
      <div className=" mt-10 text-cyan-500 text-4xl flex justify-center">
        <h1>Projets WordPress</h1>
        <br />
      </div>

      <section className="grid grid-cols-3 gap-3">
        <Card className="flex ml-10 mt-10 w-60 h-70 bg-gradient-to-r from-cyan-500 to-blue-500 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
          <a href="https://la-fabrique.iteeweb.fr/">
            <Image
              src="/iconsWordpress/laFabrique.jpg"
              width={185}
              height={160}
              alt="closMarsault"
              className="rounded-lg mt-4 mx-auto"
            />
          </a>

          <div className="p-10">
            <a href="https://la-fabrique.iteeweb.fr/">
              <h5 className="mb-2 flex justify-center text-2xl font-bold text-gray-900 dark:text-white">
                Site vitrine de restaurant
              </h5>
            </a>

            <a
              href="https://la-fabrique.iteeweb.fr/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cliquez-ici
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Card>

        <Card className="ml-10 mt-10 w-60 h-70 bg-gradient-to-r from-cyan-500 to-blue-500 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
          <a href="https://la-fabrique.iteeweb.fr/">
            <Image
              src="/iconsWordpress/laFabrique.jpg"
              width={185}
              height={160}
              alt="closMarsault"
              className="rounded-lg mt-4 mx-auto"
            />
          </a>

          <div className="p-10">
            <a href="https://la-fabrique.iteeweb.fr/">
              <h5 className="mb-2 flex justify-center text-2xl font-bold text-gray-900 dark:text-white">
                Site vitrine de restaurant
              </h5>
            </a>

            <a
              href="https://la-fabrique.iteeweb.fr/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cliquez-ici
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Card>

        <Card className="ml-10 mt-10 w-60 h-70 bg-gradient-to-r from-cyan-500 to-blue-500 border border-gray-200 rounded-lg shadow-lg hover:shadow-white">
          <a href="https://la-fabrique.iteeweb.fr/">
            <Image
              src="/iconsWordpress/laFabrique.jpg"
              width={185}
              height={160}
              alt="closMarsault"
              className="rounded-lg mt-4 mx-auto"
            />
          </a>

          <div className="p-10">
            <a href="https://la-fabrique.iteeweb.fr/">
              <h5 className="mb-2 flex justify-center text-2xl font-bold text-gray-900 dark:text-white">
                Site vitrine de restaurant
              </h5>
            </a>

            <a
              href="https://la-fabrique.iteeweb.fr/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cliquez-ici
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Card>
      </section>
    </>
  );
};
