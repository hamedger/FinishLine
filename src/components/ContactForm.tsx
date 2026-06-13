"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  formType: "contact" | "fleet";
  submitLabel?: string;
}

export function ContactForm({
  formType,
  submitLabel = "Send Message",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please call us.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please call us.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-lg font-bold text-emerald-800">Message sent!</p>
        <p className="mt-2 text-sm text-emerald-700">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-brand-red hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      {formType === "fleet" && (
        <>
          <Field label="Company Name" name="company" required />
          <Field
            label="Fleet Size"
            name="fleetSize"
            placeholder="e.g. 5 vehicles"
            required
          />
        </>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <Field label="Email" name="email" type="email" required />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-navy outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder={
            formType === "fleet"
              ? "Tell us about your fleet maintenance needs..."
              : "How can we help you?"
          }
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brand-red" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-brand-red py-3.5 text-base font-bold text-white transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-navy outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
      />
    </div>
  );
}

export function FleetForm() {
  return <ContactForm formType="fleet" submitLabel="Request Fleet Quote" />;
}
