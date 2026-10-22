"use client";

import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isEmail, isSaudiPhone } from "@/lib/validation";

const serviceIds = ["electrical", "elv", "mechanicalHvac", "mechanicalFire", "mechanicalPlumbing", "civil", "multiple"] as const;
const projectTypeIds = ["commercial", "industrial", "residential", "infrastructure", "government", "other"] as const;

type Status = "idle" | "sending" | "success" | "failure" | "not-configured";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const control =
  "w-full rounded-lg border bg-white px-4 text-[15px] text-ink transition placeholder:text-slate-400 focus:outline-none focus:ring-2";
const controlOk = "border-slate-300 focus:border-navy focus:ring-navy/15";
const controlBad = "border-signal focus:border-signal focus:ring-signal/20";

function Field({
  id,
  label,
  required,
  requiredLabel,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  requiredLabel: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-signal">
              {" "}
              *
            </span>
            <span className="sr-only"> ({requiredLabel})</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-signal-dark">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectControl({ id, placeholder, children }: { id: string; placeholder: string; children: ReactNode }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        defaultValue=""
        className={cn(
          control,
          controlOk,
          "h-12 appearance-none pe-10 [&:has(option[value='']:checked)]:text-muted",
        )}
      >
        <option value="">{placeholder}</option>
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute inset-e-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export function QuoteForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const textControl = (id: keyof Errors, extra?: string) => ({
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
    className: cn(control, errors[id] ? controlBad : controlOk, extra),
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    // Spam honeypot: real visitors never see or tick this box.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const next: Errors = {};
    if (!value("name")) next.name = t("errors.name");
    if (!value("email")) next.email = t("errors.emailRequired");
    else if (!isEmail(value("email"))) next.email = t("errors.emailInvalid");
    if (!value("phone")) next.phone = t("errors.phoneRequired");
    else if (!isSaudiPhone(value("phone"))) next.phone = t("errors.phoneInvalid");
    if (!value("message")) next.message = t("errors.message");
    setErrors(next);

    const firstInvalid = (["name", "email", "phone", "message"] as const).find((k) => next[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: "New quote request from the ZIMAM website",
          from_name: "ZIMAM website",
          replyto: value("email"),
          name: value("name"),
          company: value("company"),
          email: value("email"),
          phone: value("phone"),
          service: value("service"),
          project_type: value("projectType"),
          location: value("location"),
          message: value("message"),
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (json.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("failure");
      }
    } catch {
      setStatus("failure");
    }
  }

  if (status === "success") {
    return (
      <section role="status" className="rounded-xl bg-white p-8 text-center shadow-card sm:p-12">
        <CheckCircle2 aria-hidden="true" className="mx-auto size-14 text-signal" strokeWidth={1.5} />
        <h2 className="mt-5 font-heading text-xl font-bold text-navy sm:text-2xl">{t("success.title")}</h2>
        <p className="mt-3 text-muted">{t("success.text")}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrors({});
          }}
          className="mt-6 text-sm font-semibold text-royal underline-offset-4 hover:underline"
        >
          {t("success.again")}
        </button>
      </section>
    );
  }

  const req = t("required");
  const sending = status === "sending";
  const banner = "mt-6 rounded-lg border border-signal/30 bg-signal/5 px-4 py-3 text-sm font-medium text-signal-dark";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-heading text-xl font-bold text-navy">{t("title")}</h2>

      {Object.keys(errors).length > 0 && (
        <p role="alert" className={banner}>
          {t("summary")}
        </p>
      )}

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -z-10 h-0 w-0 overflow-hidden opacity-0">
        <label>
          Do not tick
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label={t("fields.name")} required requiredLabel={req} error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" placeholder={t("placeholders.name")} {...textControl("name", "h-12")} />
        </Field>
        <Field id="company" label={t("fields.company")} requiredLabel={req}>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder={t("placeholders.company")} className={cn(control, controlOk, "h-12")} />
        </Field>
        <Field id="email" label={t("fields.email")} required requiredLabel={req} error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" dir="ltr" placeholder={t("placeholders.email")} {...textControl("email", "h-12 text-start")} />
        </Field>
        <Field id="phone" label={t("fields.phone")} required requiredLabel={req} error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" placeholder={t("placeholders.phone")} {...textControl("phone", "h-12 text-start")} />
        </Field>
        <Field id="service" label={t("fields.service")} requiredLabel={req}>
          <SelectControl id="service" placeholder={t("placeholders.service")}>
            {serviceIds.map((id) => (
              <option key={id} value={t(`services.${id}`)} className="text-ink">
                {t(`services.${id}`)}
              </option>
            ))}
          </SelectControl>
        </Field>
        <Field id="projectType" label={t("fields.projectType")} requiredLabel={req}>
          <SelectControl id="projectType" placeholder={t("placeholders.projectType")}>
            {projectTypeIds.map((id) => (
              <option key={id} value={t(`projectTypes.${id}`)} className="text-ink">
                {t(`projectTypes.${id}`)}
              </option>
            ))}
          </SelectControl>
        </Field>
        <Field id="location" label={t("fields.location")} requiredLabel={req} className="sm:col-span-2">
          <input id="location" name="location" type="text" autoComplete="address-level2" placeholder={t("placeholders.location")} className={cn(control, controlOk, "h-12")} />
        </Field>
        <Field id="message" label={t("fields.message")} required requiredLabel={req} error={errors.message} className="sm:col-span-2">
          <textarea id="message" name="message" rows={6} placeholder={t("placeholders.message")} {...textControl("message", "min-h-40 resize-y py-3")} />
        </Field>
      </div>

      {status === "failure" && (
        <p role="alert" className={banner}>
          {t("failure")}
        </p>
      )}
      {status === "not-configured" && (
        <p role="alert" className={banner}>
          {t("notConfigured")}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-signal px-8 text-sm font-semibold text-white transition hover:bg-signal-dark focus-visible:outline-offset-2 disabled:cursor-wait disabled:opacity-80 max-sm:w-full"
      >
        {sending ? (
          <Loader2 aria-hidden="true" className="size-4 animate-spin motion-reduce:animate-none" />
        ) : (
          <Send aria-hidden="true" className="size-4 rtl:-scale-x-100" />
        )}
        {sending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
