import { NeonButton } from "../components/neonButton";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldValues,
} from "react-hook-form";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nom: "", // Ajoutez ces lignes pour définir des valeurs par défaut
      prenom: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-8 p-6 bg-gray rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <section className="flex grid-rows-2 gap-10">
            <div>
              <label className="block text-white font-bold">Nom</label>
              <Controller
                name="nom"
                control={control}
                render={({ field }) => (
                  <input {...field} className="w-full p-2 border rounded" />
                )}
                rules={{ required: "Ce champ est requis" }}
              />
              {errors.nom && (
                <p className="text-red-500">{errors.nom.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-bold">Prénom</label>
              <Controller
                name="prenom"
                control={control}
                render={({ field }) => (
                  <input {...field} className="w-full p-2 border rounded" />
                )}
                rules={{ required: "Ce champ est requis" }}
              />
              {errors.prenom && (
                <p className="text-red-500">{errors.prenom.message}</p>
              )}
            </div>
          </section>

          <div>
            <label className="block text-white font-bold">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full p-2 border rounded"
                />
              )}
              rules={{
                required: "Ce champ est requis",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Adresse email invalide",
                },
              }}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-bold">Message</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 border rounded"
                ></textarea>
              )}
              rules={{ required: "Ce champ est requis" }}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <NeonButton type="submit">Envoyer</NeonButton>
        </form>
      </div>
    </>
  );
};
