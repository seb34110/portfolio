import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="flex flex-col gap-5 w-55 text-center flex justify-center text-cyan-400">
            <div className="flex gap-5 items-center">
              <div className="skeleton w-34 h-35 shrink-0">
                <Image
                  src="/profile/profile.jpg"
                  width="80"
                  height="80"
                  alt="profile logo"
                  className=""
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <div className="skeleton h-12 w-65 text-3xl">Sébastien</div>
                <div className="skeleton h-12 w-65 text-3xl">Wendling</div>
              </div>
            </div>
            <div className="skeleton h-24 w-full flex items-center justify-center">
              Développeur React & WordPress.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
