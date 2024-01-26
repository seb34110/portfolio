import Image from "next/image";
import { UilWindows } from "@iconscout/react-unicons";

export default function Skills() {
  return (
    <>
      <section className="">
        <div className="hero-content skeleton h-25 flex items-center md:h-35 lg:h-46 flex items-center">
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
          />

          <Image
            src="/icons/react_logo.png"
            width="100"
            height="100"
            alt="react"
          />

          <Image
            src="/icons/html_logo.png"
            width="100"
            height="100"
            alt="html5"
          />

          <Image
            src="/icons/tailwind_logo.png"
            width="100"
            height="100"
            alt="tailwind"
          />

          <Image
            src="/icons/linux_icon.png"
            width="100"
            height="100"
            alt="linux"
          />

          <Image
            src="/icons/windows_logo.png"
            width="100"
            height="100"
            alt="windows"
          />

          <Image
            src="/icons/github_logo.png"
            width="100"
            height="100"
            alt="github"
          />
        </div>
      </section>
    </>
  );
}
