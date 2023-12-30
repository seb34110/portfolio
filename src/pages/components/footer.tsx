import Link from "next/link";

export const FooterSite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-black text-white p-4 mt-auto flex items-center justify-between">
        <span>@ Copywright 2022 Sébastien Wendling</span>
        <div>
          <Link href="./">
            <img
              src="/logoSWC.jpg"
              alt="logo SecureWeb Creation"
              className="mx-auto w-16 h-16 object-cover rounded-full"
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
