import Image from "next/image";
export default function CardWordpress() {
  return (
    <>
      <section className="hero">
        <div className="hero-content card grid-flex-col md:flex-row">
          <div className="shadow-lg hover:shadow-white">
            <figure>
              <Image
                src="/iconsWordpress/closMarsault.png"
                width="200"
                height="200"
                alt="chambre d'hôte"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center text-xl mb-5">
              <h2 className="card-title">Site Vitrine</h2>
              <p>Chambres hôtes</p>

              <div className="card-actions neonButton">
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

          <div className="shadow-lg hover:shadow-white">
            <figure>
              <Image
                src="/iconsWordpress/solutionNet.jpg"
                width="200"
                height="200"
                alt="entrepride de nettoyage"
                className="rounded-lg"
              />
            </figure>

            <div className="card-body items-center text-center text-xl mb-5">
              <h2 className="card-title">Site Vitrine</h2>
              <p>Société de nettoyage</p>
              <div className="card-actions neonButton">
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

          <div className="shadow-lg hover:shadow-white">
            <figure>
              <Image
                src="/iconsWordpress/image5.jpg"
                width="200"
                height="200"
                alt="restaurant"
                className="rounded-lg"
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
