import Link from "next/link";
import { HeaderSite } from "./components/header";
import { FooterSite } from "./components/footer";
import { CardDev } from "./components/cardDev";
import { Skills } from "./components/skills";
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
          <div>
            <Skills />
          </div>
        </section>
        <section>
          <div>
            <h1>Projets</h1>
          </div>
        </section>
      </main>
      <FooterSite />
    </>
  );
}
