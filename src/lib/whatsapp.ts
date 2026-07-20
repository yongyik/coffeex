import { siteConfig } from "@/config/site";
import type { EnquiryTypeKey, Locale } from "@/i18n/types";

export function getWhatsAppUrl(locale: Locale, message?: string) {
  const text = message ?? siteConfig.defaultWhatsAppMessage[locale];

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    text,
  )}`;
}

export interface WhatsAppFormData {
  name: string;
  phone: string;
  enquiryType: EnquiryTypeKey;
  preferredDate: string;
  guests: string;
  message: string;
}

interface WhatsAppMessageLabels {
  greeting: string;
  enquiryTypeValue: string;
  notProvided: string;
  fields: {
    name: string;
    phone: string;
    enquiryType: string;
    preferredDate: string;
    guests: string;
    message: string;
  };
}

export function buildWhatsAppMessage(
  data: WhatsAppFormData,
  labels: WhatsAppMessageLabels,
) {
  return [
    labels.greeting,
    "",
    `${labels.fields.name}：${data.name}`,
    `${labels.fields.phone}：${data.phone}`,
    `${labels.fields.enquiryType}：${labels.enquiryTypeValue}`,
    `${labels.fields.preferredDate}：${data.preferredDate || labels.notProvided}`,
    `${labels.fields.guests}：${data.guests || labels.notProvided}`,
    `${labels.fields.message}：${data.message}`,
  ].join("\n");
}
