// Librairie
import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  // Variables
  const { nom, prenom, email, contenu } = req.body;

  if (!prenom || !nom || !email || !contenu) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }

  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.status(400).send({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
    return;
  }

  // Transformer les retours à la ligne pour le HTML
  const message = contenu
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

  // Donner la clé API
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Création du message
  const sendGridMail = {
    to: "sebastienwendling@orange.fr",
    from: "sebastienwendling@orange.fr",
    templateId: "d-ece79ca715dc48f3a586580859e04143",
    dynamic_template_data: {
      nom: nom,
      prenom: prenom,
      email: email,
      contenu: message,
    },
  };

  try {
    await sgMail.send(sendGridMail);
    res.status(200).json({
      message: "EMAIL_SENDED_SUCCESSFULLY",
    });
  } catch (error) {
    console.error("Error with SendGrid:", error);
    res.status(500).json({
      message: "ERROR_WITH_SENDGRID",
      error: error.message,
    });
  }
}
