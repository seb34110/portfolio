import Image from "next/image";
import { UilWindows } from "@iconscout/react-unicons";

export default function Skills() {
  return (
    <>
      <section>
        <div className="hero-content">
          <div className="skeleton h-38 p-6 md:h-45 flex items-center justify-between lg:h-56 flex items-center justify-between">
            <Image
              src="/icons/wordpress_logo.png"
              width="100"
              height="100"
              alt="wordpress"
            />

            <Image
              src="/icons/typescrypt_logo.png"
              width="100"
              height="100"
              alt="typeScrypt"
              className="ml-2"
            />

            <Image
              src="/icons/react_logo.png"
              width="100"
              height="100"
              alt="react"
              className="ml-2"
            />

            <Image
              src="/icons/html_logo.png"
              width="100"
              height="100"
              alt="html5"
              className="ml-2"
            />

            <Image
              src="/icons/tailwind_logo.png"
              width="100"
              height="100"
              alt="tailwind"
              className="ml-2"
            />

            <Image
              src="/icons/linux_logo.png"
              width="100"
              height="100"
              alt="linux"
              className="ml-2"
            />

            <Image
              src="/icons/windows_logo.png"
              width="100"
              height="100"
              alt="windows"
              className="ml-2"
            />

            <Image
              src="/icons/github_logo.png"
              width="100"
              height="100"
              alt="github"
              className="ml-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
