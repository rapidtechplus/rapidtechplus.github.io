"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * Footer newsletter capture. The site is fully static (no backend), so instead
 * of a fake subscribe endpoint the form composes a prefilled email to the
 * company inbox — honest, functional, and dependency-free. The email is
 * validated by the native `type="email"` control before the mail client opens.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please add ${email} to the Rapid Tech Plus newsletter.`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="foot-newsletter" onSubmit={onSubmit}>
      <label className="foot-news-label" htmlFor="foot-news-email">
        Subscribe to our newsletter for product updates
      </label>
      <div className="foot-news-row">
        <input
          id="foot-news-email"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
      </div>
    </form>
  );
}
