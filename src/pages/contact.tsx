import Link from "next/link";
import { NeonButton } from "./components/neonButton";
import { HeaderSite } from "./components/header";
import { FooterSite } from "./components/footer";

import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Contact() {
  const [buttonClicked, setButtonClicked] = useState(false);

  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const handleButtonClick = () => {
    console.log("Bouton cliqué !");
    // Exécutez ici la logique pour envoyer le formulaire (à adapter selon vos besoins)
    setIsSended(true);
  };
  // Méthode
  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <>
      <HeaderSite />
      <Head>
        <title>Contact</title>
      </Head>
      <div className="text-xl">
        <h1 className="mt-28 text-6xl text-cyan-500  flex justify-center">
          Contact
        </h1>

        {/* Formulaire */}
        <form
          className="mt-28 w-500 mx-auto"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          {isSended && (
            <p className="text-white mb-10 flex justify-center">
              Votre message a bien été envoyé avec succès je vous répondrez
              rapidement.
            </p>
          )}
          <div>
            <div className="flex justify-center grid grid-cols-2 gap-20">
              <div>
                <label htmlFor="prenom" className="label">
                  Prénom
                </label>
                <input
                  className="text-black"
                  placeholder="Prénom"
                  id="prenom"
                  {...register("prenom", {
                    required: true,
                  })}
                />
                {errors.prenom && <small>Prénom requis.</small>}
              </div>
              <div>
                <label htmlFor="nom" className="label">
                  Nom
                </label>
                <input
                  className="input"
                  placeholder="Nom"
                  id="nom"
                  {...register("nom", {
                    required: true,
                  })}
                />
                {errors.nom && <small>Nom requis.</small>}
              </div>
            </div>
            <div className="mt-10 flex justify-center  grid grid-cols-4 gap-2">
              <label htmlFor="email" className="label">
                Adresse email
              </label>
              <input
                className="input mb-5"
                placeholder="Adresse email"
                id="email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && <small>email requis.</small>}
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <div>
              <label htmlFor="contenu" className="flex-justify-between">
                Contenu du message
              </label>
              <textarea
                className="input flex justify-cnter"
                rows="8"
                cols="100"
                placeholder="Bonjour..."
                {...register("contenu", {
                  required: true,
                })}
              ></textarea>
              {errors.contenu && <small className="">Message requis.</small>}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            {!isLoading && (
              <a className="neonButton text-center flex justify-center items-center">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button className="neonButton flex justify-center items-center">
                  envoyez
                </button>
              </a>
            )}
          </div>
        </form>
      </div>
      <FooterSite />
    </>
  );
}

export default Contact;
