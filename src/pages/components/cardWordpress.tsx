import Image from "next/image";
export default function CardWordpress() {
  return (
    <>
      <section className="hero">
        <div className="hero-content grid grid-row-3 md:grid-cols-3 w-full lg:grid-cols-3 w-full">
          <div className="shadow-lg shadow-black">
            <figure className="flex justify-center mt-5">
              <Image
                src="/iconsWordpress/closMarsault.png"
                width="200"
                height="200"
                alt="chambre d'hôte"
              />
            </figure>
            <div className="card-body items-center text-center text-xl mb-5">
              <h2 className="card-title">Site Vitrine</h2>
              <p>Chambres hôtes</p>

              <div className="neonButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <button className="neonButton text-xl">
                  <a href="https://clos-marsault.iteeweb.fr/">Visiter </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-lg shadow-black">
            <figure className="flex justify-center mt-5">
              <Image
                src="/iconsWordpress/solutionNet.jpg"
                width="200"
                height="200"
                alt="entrepride de nettoyage"
              />
            </figure>

            <div className="card-body items-center text-center text-xl mb-5">
              <h2 className="card-title">Site Vitrine</h2>
              <p>Société de nettoyage</p>
              <div className=" neonButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton text-xl">
                  <a href="https://solution-net34.iteeweb.fr/">Visiter </a>
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-lg shadow-black">
            <figure className="flex justify-center mt-5">
              <Image
                src="/iconsWordpress/image5.jpg"
                width="200"
                height="200"
                alt="restaurant"
              />
            </figure>
            <div className="card-body items-center text-center text-xl mb-5">
              <h2 className="card-title">Site Vitrine</h2>
              <p>Restaurant la Fabrique</p>
              <div className="card-actions neonButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton text-xl">
                  <a href="https://la-fabrique.iteeweb.fr/">Visiter</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
