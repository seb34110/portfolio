import Link from "next/link";

export const HeaderSite = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <header className="bg-black text-white p-4 mt-auto flex items-center justify-between">
        <div className="h-16">
          <Link href="./">
            <img
              className="mx-auto w-16 h-16 object-cover rounded-full"
              src="./logoSWC.jpg"
              alt="logo SecureWeb Creation"
            />
          </Link>
        </div>
        <ul className="text-xl ml-4 flex justify-end">
          <li className="mr-3 hover:text-cyan-500">
            <Link href="../">Acceuil</Link>
          </li>
          <li className="mr-3 hover:text-cyan-500">
            <Link href="../contact">Contact</Link>
          </li>
          <li className="mr-2 hover:text-cyan-500">
            <Link href="../projets">Projets</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
