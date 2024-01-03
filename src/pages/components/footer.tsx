import Link from "next/link";
import Image from "next/image";

export const FooterSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-black text-white p-4 mt-auto flex items-center justify-between">
        <span>@ Copywright 2022 Sébastien Wendling</span>
        <div>
          <Link href="./">
            <Image
              src="/logoSWC.jpg"
              width="50"
              height="50"
              alt="logo SecureWeb Creation"
            />
          </Link>
        </div>
        <ul className="ml-4 flex justify-end">
          <li className="mr-5">
            <Link href="../contact">Contact</Link>
          </li>
          <li className="mr-5">
            <Link href="mailto:sebastienwendling@iteeweb.fr">Email</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
