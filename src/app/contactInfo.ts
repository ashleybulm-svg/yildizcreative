// Single source of truth for contact details — change here and it updates everywhere.
export const CONTACT_EMAIL = "yesseyildiz@gmail.com";
export const WHATSAPP_NUMBER = "526642702114"; // international format, digits only
export const WHATSAPP_DISPLAY = "+52 664 270 2114";
export const INSTAGRAM_URL = "https://www.instagram.com/yildizcreativestudio/";

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mailLink = (subject?: string, body?: string) => {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : "",
    body ? `body=${encodeURIComponent(body)}` : "",
  ].filter(Boolean).join("&");
  return `mailto:${CONTACT_EMAIL}${params ? `?${params}` : ""}`;
};
