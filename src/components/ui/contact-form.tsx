"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    setPending(true);
    setError("");
    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Envoi impossible");
      setSent(true);
      form.reset();
    } catch {
      setError(
        "Votre message n’a pas pu être envoyé. Réessayez ou écrivez directement à landrybrigea@gmail.com.",
      );
    } finally {
      setPending(false);
    }
  }
  if (sent)
    return (
      <div className="form-success" role="status">
        <CheckCircle size={38} />
        <h2>Message bien reçu.</h2>
        <p>
          Merci pour votre message. Je reviendrai vers vous pour en discuter.
        </p>
        <button className="button button-dark" onClick={() => setSent(false)}>
          Envoyer un autre message
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} className="contact-form" aria-busy={pending}>
      <h2>Parlez-moi de votre projet.</h2>
      <p>Les champs marqués d’un * sont obligatoires.</p>
      <div className="form-row">
        <label htmlFor="name">
          Votre nom *
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Comment vous appelez-vous ?"
          />
        </label>
        <label htmlFor="email">
          Votre email *
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="vous@exemple.com"
          />
        </label>
      </div>
      <label htmlFor="subject">
        Sujet *
        <input
          id="subject"
          name="subject"
          required
          maxLength={160}
          placeholder="Site web, application mobile, collaboration…"
        />
      </label>
      <label htmlFor="message">
        Votre message *
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Votre idée, vos besoins, votre calendrier…"
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button
        disabled={pending}
        className="button button-primary"
        type="submit"
      >
        {pending ? "Envoi en cours…" : "Envoyer mon message"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-privacy">
        Vos coordonnées servent uniquement à répondre à votre demande.
      </p>
    </form>
  );
}
