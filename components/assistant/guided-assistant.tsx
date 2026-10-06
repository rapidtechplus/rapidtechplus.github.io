"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import {
  matchTopic,
  type AssistantLink,
  type AssistantTopic,
} from "@/lib/assistant";
import { useReducedMotionSafe } from "@/lib/use-motion-preference";

type Message = {
  id: number;
  from: "bot" | "user";
  lines: string[];
  links?: AssistantLink[];
};

/** Simulated "thinking" pause — skipped entirely under reduced motion. */
const REPLY_DELAY_MS = 450;
const MAX_SUGGESTIONS = 4;

/**
 * Floating guided assistant. Answers only from `topics` (built at build time
 * from the page's own content — see `lib/assistant.ts`) and hands everything
 * else to the contact page. Non-modal dialog: Escape closes it and returns
 * focus to the launcher; the transcript is an `aria-live` log.
 */
export function GuidedAssistant({
  subject,
  topics,
  contactHref,
}: {
  /** What this assistant covers, e.g. "AI Development". */
  subject: string;
  topics: AssistantTopic[];
  contactHref: string;
}) {
  const reduce = useReducedMotionSafe();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState<Set<string>>(new Set());
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: 0,
      from: "bot",
      lines: [
        `Hi! I can answer questions about ${subject} using what's on this page. Pick a question or type your own.`,
      ],
    },
  ]);
  const nextId = useRef(1);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing]);

  function close() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  function push(message: Omit<Message, "id">) {
    const id = nextId.current++;
    setMessages((m) => [...m, { ...message, id }]);
  }

  function ask(question: string, topic: AssistantTopic | null) {
    if (typing) return;
    push({ from: "user", lines: [question] });
    const reply: Omit<Message, "id"> = topic
      ? { from: "bot", lines: topic.answer, links: topic.links }
      : {
          from: "bot",
          lines: [
            "I can only answer from this page, and I couldn't find that here.",
            "Our team can help directly — or try one of the suggestions below.",
          ],
          links: [{ label: "Talk to the team", href: contactHref }],
        };
    if (topic) setAsked((s) => new Set(s).add(topic.id));

    if (reduce) {
      push(reply);
      return;
    }
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      push(reply);
    }, REPLY_DELAY_MS);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = draft.trim();
    if (!q) return;
    setDraft("");
    ask(q, matchTopic(q, topics));
  }

  const suggestions = topics
    .filter((t) => !asked.has(t.id))
    .slice(0, MAX_SUGGESTIONS);

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="ga-launcher"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close() : setOpen(true))}
      >
        {open ? (
          <X aria-hidden size={18} />
        ) : (
          <MessageCircle aria-hidden size={18} />
        )}
        <span>{open ? "Close assistant" : `Ask about ${subject}`}</span>
      </button>

      <div
        id={panelId}
        className="ga-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        hidden={!open}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
      >
        <header className="ga-head">
          <span className="ga-avatar" aria-hidden>
            <Sparkles size={16} />
          </span>
          <div>
            <p className="ga-title" id={titleId}>
              {subject} assistant
            </p>
            <p className="ga-sub">Guided answers from this page</p>
          </div>
          <button
            type="button"
            className="ga-close"
            aria-label="Close assistant"
            onClick={close}
          >
            <X aria-hidden size={16} />
          </button>
        </header>

        <div
          ref={logRef}
          className="ga-log"
          role="log"
          aria-live="polite"
          aria-label="Conversation"
        >
          {messages.map((m) => (
            <div key={m.id} className={`ga-msg ga-${m.from}`}>
              <MessageBody lines={m.lines} />
              {m.links?.length ? (
                <div className="ga-links">
                  {m.links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}>
                      {l.label} <span aria-hidden>→</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          {typing ? (
            <div className="ga-msg ga-bot ga-typing" aria-label="Typing">
              <span />
              <span />
              <span />
            </div>
          ) : null}
        </div>

        {suggestions.length > 0 ? (
          <div className="ga-suggest" aria-label="Suggested questions">
            {suggestions.map((t) => (
              <button
                key={t.id}
                type="button"
                disabled={typing}
                onClick={() => ask(t.label, t)}
              >
                {t.label}
              </button>
            ))}
          </div>
        ) : null}

        <form className="ga-form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor={`${panelId}-q`}>
            Ask a question
          </label>
          <input
            ref={inputRef}
            id={`${panelId}-q`}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask a question…"
            autoComplete="off"
            maxLength={200}
          />
          <button type="submit" aria-label="Send" disabled={!draft.trim()}>
            <Send aria-hidden size={16} />
          </button>
        </form>
      </div>
    </>
  );
}

/** Renders answer lines; consecutive "• " lines become one list. */
function MessageBody({ lines }: { lines: string[] }) {
  const blocks: (string | string[])[] = [];
  for (const line of lines) {
    if (line.startsWith("• ")) {
      const last = blocks[blocks.length - 1];
      if (Array.isArray(last)) last.push(line.slice(2));
      else blocks.push([line.slice(2)]);
    } else blocks.push(line);
  }
  return (
    <>
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i}>
            {b.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{b}</p>
        ),
      )}
    </>
  );
}
