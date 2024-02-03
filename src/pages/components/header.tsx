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
            <div className="ml-4 flex justify-end">
              <div className="mr-3 hover:text-cyan-500">
                <a href="../contact">
                  <button className="neonButton btn btn-ghost text-lg">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Contact
                  </button>
                </a>
              </div>
              <div className="hover:text-cyan-500">
                <a href="https://secureweb.vercel.app">
                  <button className="neonButton btn btn-ghost text-lg">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Mon site
                  </button>
                </a>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
