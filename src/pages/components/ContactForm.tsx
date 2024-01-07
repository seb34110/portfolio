import { NeonButton } from "../components/neonButton";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldValues,
} from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Envoyez les données à votre backend ici
  };

  const handleClick = () => {
    // Fonction à exécuter lors du clic sur le bouton
    console.log("Bouton cliqué!");
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray rounded shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <label className="block text-white font-bold">Nom</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} className="w-full p-2 border rounded" />
            )}
            rules={{ required: "Ce champ est requis" }}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

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

        <NeonButton onClick={handleClick}>Envoyer</NeonButton>
      </form>
    </div>
  );
};
