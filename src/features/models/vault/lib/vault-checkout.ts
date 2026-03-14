"use client";

const CHECKOUT_EMAIL_KEY = "octalve_vault_checkout_email";

function isBrowser() {
  return typeof window !== "undefined";
}

export function readVaultCheckoutEmail() {
  if (!isBrowser()) return "";
  return window.localStorage.getItem(CHECKOUT_EMAIL_KEY) ?? "";
}

export function writeVaultCheckoutEmail(email: string) {
  if (!isBrowser()) return;
  window.localStorage.setItem(CHECKOUT_EMAIL_KEY, email.trim());
}

export function clearVaultCheckoutEmail() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(CHECKOUT_EMAIL_KEY);
}
