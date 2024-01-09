import Link from "next/link";
import Image from "next/image";

export const HeaderSite = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <header className="bg-black text-white p-1 mt-auto flex items-center justify-between">
        <div className="h-16">
          <Link href="./">
            <Image
              src="/logoSWC.jpg"
              width="60"
              height="60"
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
            <Link href="https://iteeweb.fr">Site web</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
