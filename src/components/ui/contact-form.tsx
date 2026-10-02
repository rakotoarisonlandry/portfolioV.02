"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
export function ContactForm() {
  const { language, t } = useLanguage();
  const english = language === "en";
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
        <h2>{english ? "Message received." : "Message bien reçu."}</h2>
        <p>
          {english ? "Thank you for your message. I will get back to you soon." : "Merci pour votre message. Je reviendrai vers vous pour en discuter."}
        </p>
        <button className="button button-dark" onClick={() => setSent(false)}>
          {english ? "Send another message" : "Envoyer un autre message"}
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} className="contact-form" aria-busy={pending}>
      <h2>{english ? "Tell me about your project." : "Parlez-moi de votre projet."}</h2>
      <p>{english ? "Fields marked with * are required." : "Les champs marqués d’un * sont obligatoires."}</p>
      <div className="form-row">
        <label htmlFor="name">
          {english ? "Your name *" : "Votre nom *"}
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder={english ? "What is your name?" : "Comment vous appelez-vous ?"}
          />
        </label>
        <label htmlFor="email">
          {english ? "Your email *" : "Votre email *"}
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder={english ? "you@example.com" : "vous@exemple.com"}
          />
        </label>
      </div>
      <label htmlFor="subject">
        {english ? "Subject *" : "Sujet *"}
        <input
          id="subject"
          name="subject"
          required
          maxLength={160}
          placeholder={english ? "Website, mobile app, collaboration…" : "Site web, application mobile, collaboration…"}
        />
      </label>
      <label htmlFor="message">
        {english ? "Your message *" : "Votre message *"}
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder={english ? "Your idea, needs, timeline…" : "Votre idée, vos besoins, votre calendrier…"}
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
        {pending ? t("sending") : t("sendMessage")}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-privacy">
        {english ? "Your details are only used to answer your request." : "Vos coordonnées servent uniquement à répondre à votre demande."}
      </p>
    </form>
  );
}
