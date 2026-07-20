"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import Banner from "@/components/about/Banner";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/i18n/config";
import type {
  Dictionary,
  EnquiryTypeKey,
  Locale,
} from "@/i18n/types";
import {
  buildWhatsAppMessage,
  getWhatsAppUrl,
  type WhatsAppFormData,
} from "@/lib/whatsapp";

const enquiryTypeKeys: EnquiryTypeKey[] = [
  "table",
  "event",
  "menu",
  "business",
  "other",
];

type FormErrors = Partial<
  Record<"name" | "phone" | "enquiryType" | "message", string>
>;

interface ContactPageClientProps {
  locale: Locale;
  dictionary: Dictionary["contact"];
}

export default function ContactPageClient({
  locale,
  dictionary,
}: ContactPageClientProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState<EnquiryTypeKey | "">("");
  const [preferredDate, setPreferredDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = dictionary.validation.name;
    if (!phone.trim()) nextErrors.phone = dictionary.validation.phone;
    if (!enquiryType) nextErrors.enquiryType = dictionary.validation.enquiryType;
    if (!message.trim()) nextErrors.message = dictionary.validation.message;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length || !enquiryType) {
      window.requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    const formData: WhatsAppFormData = {
      name: name.trim(),
      phone: phone.trim(),
      enquiryType,
      preferredDate,
      guests,
      message: message.trim(),
    };
    const whatsappMessage = buildWhatsAppMessage(formData, {
      greeting: dictionary.whatsappGreeting,
      enquiryTypeValue: dictionary.enquiryTypes[enquiryType],
      notProvided: dictionary.notProvided,
      fields: dictionary.whatsappFields,
    });

    window.open(
      getWhatsAppUrl(locale, whatsappMessage),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="text-amber-50">
      <Banner
        title={dictionary.bannerTitle}
        src="/images/contact/header.webp"
        alt={dictionary.bannerAlt}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
              {dictionary.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
              {dictionary.introTitle}
            </h2>
            <p className="mt-5 leading-8 text-amber-50/85">{dictionary.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.phoneTitle}
                </h3>
                <p className="mt-2 text-sm text-amber-50/85">{siteConfig.phone}</p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="mt-2 inline-block underline underline-offset-4 hover:text-amber-200"
                >
                  {dictionary.callUs}
                </a>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.whatsappTitle}
                </h3>
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block underline underline-offset-4 hover:text-amber-200"
                >
                  {dictionary.messageWhatsapp}
                </a>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.emailTitle}
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-amber-50/85 underline underline-offset-4 hover:text-amber-200"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.instagramTitle}
                </h3>
                <p className="mt-2 text-amber-50/85">{siteConfig.instagramHandle}</p>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4 sm:col-span-2">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.addressTitle}
                </h3>
                <p className="mt-2 text-amber-50/85">{siteConfig.address}</p>
              </div>

              <div className="rounded-2xl border border-amber-50/20 bg-amber-50/10 p-4 sm:col-span-2">
                <h3 className="text-lg font-semibold text-amber-100">
                  {dictionary.hoursTitle}
                </h3>
                <div className="mt-3 space-y-2">
                  {siteConfig.businessHours.map((item) => (
                    <div
                      key={item.day.en}
                      className="flex flex-col gap-1 text-sm text-amber-50/85 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span>{item.day[locale]}</span>
                      <span>{item.time[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            aria-describedby="form-privacy-note"
            className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg"
          >
            <h2 className="text-3xl font-bold">{dictionary.formTitle}</h2>
            <p id="form-privacy-note" className="mt-3 text-sm leading-6 text-amber-50/80">
              {dictionary.formNotice}{" "}
              <Link
                href={getLocalizedPath(locale, "/privacy")}
                className="underline underline-offset-4 hover:text-amber-200"
              >
                {dictionary.privacyLink}
              </Link>
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-amber-100">
                  {dictionary.fields.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={dictionary.fields.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
                {errors.name ? <p id="name-error" className="mt-2 text-sm text-amber-200">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-amber-100">
                  {dictionary.fields.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={dictionary.fields.phonePlaceholder}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
                {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-amber-200">{errors.phone}</p> : null}
              </div>

              <div>
                <label htmlFor="enquiry-type" className="mb-2 block text-sm font-medium text-amber-100">
                  {dictionary.fields.enquiryType}
                </label>
                <select
                  id="enquiry-type"
                  name="enquiryType"
                  value={enquiryType}
                  onChange={(event) => setEnquiryType(event.target.value as EnquiryTypeKey | "")}
                  aria-invalid={Boolean(errors.enquiryType)}
                  aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
                  className="w-full rounded-xl border border-amber-50/30 bg-stone-950 px-4 py-3 text-amber-50 outline-none focus:border-amber-200"
                >
                  <option value="">{dictionary.fields.selectEnquiryType}</option>
                  {enquiryTypeKeys.map((key) => (
                    <option key={key} value={key}>{dictionary.enquiryTypes[key]}</option>
                  ))}
                </select>
                {errors.enquiryType ? <p id="enquiry-error" className="mt-2 text-sm text-amber-200">{errors.enquiryType}</p> : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferred-date" className="mb-2 block text-sm font-medium text-amber-100">
                    {dictionary.fields.preferredDate}
                  </label>
                  <input
                    id="preferred-date"
                    name="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(event) => setPreferredDate(event.target.value)}
                    className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none [color-scheme:dark] focus:border-amber-200"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="mb-2 block text-sm font-medium text-amber-100">
                    {dictionary.fields.guests}
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    placeholder={dictionary.fields.guestsPlaceholder}
                    className="w-full rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-amber-100">
                  {dictionary.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={dictionary.fields.messagePlaceholder}
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-amber-50/30 bg-black/30 px-4 py-3 text-amber-50 outline-none placeholder:text-amber-50/40 focus:border-amber-200"
                />
                {errors.message ? <p id="message-error" className="mt-2 text-sm text-amber-200">{errors.message}</p> : null}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-100 px-6 py-3 font-semibold text-stone-950 transition hover:bg-white"
              >
                {dictionary.submit}
              </button>
            </div>
          </form>
        </section>

        <section
          id="location"
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-amber-500/50 bg-black/30 shadow-lg"
        >
          <div className="p-5">
            <h2 className="text-3xl font-bold">{dictionary.locationTitle}</h2>
            <p className="mt-2 text-sm text-amber-50/80">
              {dictionary.locationDescription}
            </p>
          </div>
          <iframe
            title={dictionary.mapTitle}
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
            className="h-80 w-full border-0 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </div>
  );
}
