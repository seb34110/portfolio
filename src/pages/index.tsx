import Link from "next/link";
import { HeaderSite } from "./components/header";
import { FooterSite } from "./components/footer";
import { CardDev } from "./components/cardDev";
import { Skills } from "./components/skills";
import { CardWordpress } from "./components/cardWordpress";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderSite />
      <main>
        <section>
          <div>
            <CardDev />
          </div>
        </section>
        <section>
          <div>
            <Skills />
          </div>
        </section>
        <section>
          <div>
            <CardWordpress />
          </div>
        </section>
      </main>
      <FooterSite />
    </>
  );
}
