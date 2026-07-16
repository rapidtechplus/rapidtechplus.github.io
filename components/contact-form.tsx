"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

/**
 * Static, backend-free contact form. On submit it composes a mailto: link
 * with the message pre-filled and hands off to the visitor's email client —
 * no server or third-party service required.
 */
export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  // Keys the error element so its shake animation replays on every failed
  // attempt, not just the first.
  const [attempt, setAttempt] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      setAttempt((n) => n + 1);
      return;
    }
    setError(null);

    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Briefly describe your project or question…"
        />
      </div>
      {error ? (
        <p key={attempt} className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="btn btn-primary"
        type="submit"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Send message
      </button>
      <p
        style={{
          fontSize: ".82rem",
          color: "var(--text-dim)",
          margin: "14px 0 0",
          textAlign: "center",
        }}
      >
        This opens your email app with the message pre-filled. You can also
        email us directly.
      </p>
    </form>
  );
}
