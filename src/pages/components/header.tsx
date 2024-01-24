import Image from "next/image";

export default function Header() {
  return (
    <>
      <section>
        <div className="flex flex-col max-h-screen max-w-screen">
          <header className="bg-black text-white mt-5 flex items-center justify-between">
            <div>
              <a href="./">
                <Image
                  src="/profile/logoSWC.jpg"
                  width="50"
                  height="50"
                  alt="logo"
                />
              </a>
            </div>
            <ul className="text-xl ml-4 flex justify-end">
              <li className="mr-3 hover:text-cyan-500">
                <a href="../">
                  <button className="btn btn-ghost text-xl">Acceuil</button>
                </a>
              </li>
              <li className="mr-3 hover:text-cyan-500">
                <a href="../contact">
                  <button className="btn btn-ghost text-xl">Contact</button>
                </a>
              </li>
              <li className="mr-5 hover:text-cyan-500">
                <a href="https://iteeweb.fr">
                  <button className="btn btn-ghost text-xl">Site web</button>
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section>
    </>
  );
}
