import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message?: string) {
  const defaultMessage = `你好，我想了解 ${siteConfig.nameZh}（${siteConfig.name}）的服务。`;

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message ?? defaultMessage,
  )}`;
}
