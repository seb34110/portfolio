import Header from "./components/header";
import Footer from "./components/footer";

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
      <Header />
      <section>
        <div className="flex items-center justify-center min-h-screen">
          <div className="ring-2 ring-white shadow-lg hover:shadow-white text-xl">
            <h1 className="flex justify-center text-4xl mt-10 mb-5">Contact</h1>
            {/* Formulaire */}
            <form
              className="sm:w-1/2 ml-32 md:w-1/2"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              {isSended && (
                <p className="text-white mb-10 flex justify-center">
                  Votre message a bien été envoyé avec succès je vous répondrez
                  rapidement.
                </p>
              )}
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <div>
                    <label htmlFor="prenom" className="label">
                      Prénom
                    </label>
                    <input
                      className="input"
                      placeholder="Prénom"
                      id="prenom"
                      {...register("prenom", {
                        required: true,
                      })}
                    />
                    {errors.prenom && (
                      <small className="text-red-500">Prénom requis.</small>
                    )}
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
                    {errors.nom && (
                      <small className="text-red-500">Nom requis.</small>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Adresse mail
                  </label>
                  <input
                    className="input"
                    placeholder="Adresse mail"
                    id="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <small className="text-red-500">email requis.</small>
                  )}
                </div>
                <div>
                  <label htmlFor="contenu">Message</label>
                  <textarea
                    className="input mt-2 mb-2"
                    placeholder="Bonjour..."
                    {...register("contenu", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.contenu && (
                    <small className="text-red-500">Message requis.</small>
                  )}
                </div>
                <div>
                  {!isLoading && (
                    <button className="neonButton mb-5">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      envoyez
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
