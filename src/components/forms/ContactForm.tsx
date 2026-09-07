"use client";

import { FormEvent, useState } from "react";
import { contactAreas } from "@/content";

const fieldClasses =
  "w-full border-b border-hairline bg-transparent py-3 font-sans text-base text-ink placeholder:text-muted/70 focus:border-ink transition-colors duration-300 outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-serif text-2xl leading-relaxed max-w-md">
        Thank you. Your message has been received — we will respond in
        due course.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Name" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="Email" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="interest" className="sr-only">
          Area of Interest
        </label>
        <select id="interest" name="interest" defaultValue="" required className={`${fieldClasses} appearance-none`}>
          <option value="" disabled>
            Area of Interest
          </option>
          {contactAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Message"
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="font-sans text-sm tracking-[0.08em] uppercase border-b border-ink pb-1 transition-opacity duration-300 hover:opacity-60"
      >
        Submit
      </button>
    </form>
  );
}
