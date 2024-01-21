import Header from "./components/header";
import { FooterSite } from "./components/footer";
import Profile from "./components/profile";
import Skills from "./components/skills";
import CardWordpress from "./components/cardWordpress";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-4xl flex min-h-screen flex-col">
        <section>
          <div>
            <h1 className="mt-10 flex justify-center">Portfolio</h1>
            <br />
            <Profile />
            <br />
            <div className="divider divider-info">Skills</div>
            <br />
            <Skills />
            <br />
            <div className="divider divider-info">Projets WordPress</div>
            <br />
            <CardWordpress />
          </div>
        </section>
      </main>
      <FooterSite />
    </>
  );
}
