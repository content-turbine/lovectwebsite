const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "gmx.com",
  "mail.com",
  "yandex.com",
  "msn.com",
];

export function isWorkEmail(email: string): boolean {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_RE.test(trimmed)) return false;

  const domain = trimmed.split("@")[1];
  return !FREE_EMAIL_DOMAINS.includes(domain);
}
