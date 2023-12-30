import Link from "next/link";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique de traitement du formulaire ici
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-cyan-500 text-sm font-bold mb-2"
        >
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="nom"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-cyan-500 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-cyan-500 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="message"
          className="shadow appearance-gray-700 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-black border-white shadow-white-10 hover:bg-cyan-500 text-white hover:text-black py-2 px-4 rounded focus:outline-none"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
