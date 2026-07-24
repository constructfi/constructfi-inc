"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOPICS = ["Partnership", "Funding / grants", "Supplier network", "Press", "General"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const mailto = () => {
    const subject = encodeURIComponent(`[${topic}] Inquiry from ${name || "the website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    );
    return `mailto:hello@constructfi.co?subject=${subject}&body=${body}`;
  };

  const disabled = !name.trim() || !email.trim() || !message.trim();

  const inputCls =
    "w-full rounded-lg border border-line bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20 dark:border-border dark:focus:border-mint dark:focus:ring-mint/20";

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (!disabled) window.location.href = mailto();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className={inputCls}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            data-testid="input-name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputCls}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            data-testid="input-email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium">
          Topic
        </label>
        <select
          id="topic"
          className={inputCls}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          data-testid="select-topic"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={inputCls}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about what you’re looking for."
          data-testid="input-message"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={disabled} data-testid="button-send">
          <Send className="mr-1.5 h-4 w-4" />
          Send message
        </Button>
        <p className="text-xs text-muted-foreground">
          Opens your email client — no data is stored by this site.
        </p>
      </div>
    </form>
  );
}
