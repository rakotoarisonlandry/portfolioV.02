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
      <div className="flex flex-col items-center gap-4 text-center" role="status">
        <CheckCircle size={38} />
        <h2>{english ? "Message received." : "Message bien reçu."}</h2>
        <p>
          {english ? "Thank you for your message. I will get back to you soon." : "Merci pour votre message. Je reviendrai vers vous pour en discuter."}
        </p>
        <button className="rounded-md bg-[#27252e] px-6 py-3 text-xs font-medium text-white" onClick={() => setSent(false)}>
          {english ? "Send another message" : "Envoyer un autre message"}
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} className="space-y-5" aria-busy={pending}>
      <h2 className="text-2xl font-medium">{english ? "Tell me about your project." : "Parlez-moi de votre projet."}</h2>
      <p className="text-sm text-[var(--portfolio-muted)]">{english ? "Fields marked with * are required." : "Les champs marqués d’un * sont obligatoires."}</p>
      <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
        <label className="grid gap-2 text-xs font-medium" htmlFor="name">
          {english ? "Your name *" : "Votre nom *"}
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className="rounded-md border border-[var(--portfolio-line)] bg-transparent px-3 py-3 text-sm outline-none focus:border-[var(--portfolio-purple)] dark:text-[#f0edf5]"
            placeholder={english ? "What is your name?" : "Comment vous appelez-vous ?"}
          />
        </label>
        <label className="grid gap-2 text-xs font-medium" htmlFor="email">
          {english ? "Your email *" : "Votre email *"}
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="rounded-md border border-[var(--portfolio-line)] bg-transparent px-3 py-3 text-sm outline-none focus:border-[var(--portfolio-purple)] dark:text-[#f0edf5]"
            placeholder={english ? "you@example.com" : "vous@exemple.com"}
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-medium" htmlFor="subject">
        {english ? "Subject *" : "Sujet *"}
        <input
          id="subject"
          name="subject"
          required
          maxLength={160}
          className="rounded-md border border-[var(--portfolio-line)] bg-transparent px-3 py-3 text-sm outline-none focus:border-[var(--portfolio-purple)] dark:text-[#f0edf5]"
          placeholder={english ? "Website, mobile app, collaboration…" : "Site web, application mobile, collaboration…"}
        />
      </label>
      <label className="grid gap-2 text-xs font-medium" htmlFor="message">
        {english ? "Your message *" : "Votre message *"}
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="rounded-md border border-[var(--portfolio-line)] bg-transparent px-3 py-3 text-sm outline-none focus:border-[var(--portfolio-purple)] dark:text-[#f0edf5]"
          placeholder={english ? "Your idea, needs, timeline…" : "Votre idée, vos besoins, votre calendrier…"}
        />
      </label>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center gap-3.5 rounded-md bg-[var(--portfolio-purple)] px-6 py-3.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5933b5]"
        type="submit"
      >
        {pending ? t("sending") : t("sendMessage")}
        <ArrowUpRight size={18} />
      </button>
      <p className="text-xs text-[var(--portfolio-muted)]">
        {english ? "Your details are only used to answer your request." : "Vos coordonnées servent uniquement à répondre à votre demande."}
      </p>
    </form>
  );
}
