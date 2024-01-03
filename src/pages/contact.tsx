import Link from "next/link";
import { HeaderSite } from "./components/header";
import { FooterSite } from "./components/footer";

const Contact = () => {
  return (
    <>
      <HeaderSite />
      <main>
        <div className="container mx-auto p-4">
          <h1 className="text-cyan-500 text-4xl text-center mb-4">Contact</h1>
        </div>
      </main>
      <FooterSite />
    </>
  );
};
export default Contact;
