import Image from "next/image";

export default function Header() {
  return (
    <>
      <section>
        <div className="sticky flex flex-col max-h-screen max-w-screen">
          <header className="mt-5 flex items-center justify-between">
            <div>
              <a href="./">
                <Image
                  src="/profile/logoSWC.jpg"
                  width="40"
                  height="40"
                  alt="logo"
                  className="ml-2"
                />
              </a>
            </div>
            <ul className="text-xl ml-4 flex justify-end">
              <li className="mr-3 hover:text-cyan-500">
                <a href="../contact">
                  <button className="btn btn-ghost text-l">Contact</button>
                </a>
              </li>
              <li className="mr-5 hover:text-cyan-500">
                <a href="https://secureweb.vercel.app">
                  <button className="btn btn-ghost text-l">Mon site</button>
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section>
    </>
  );
}
