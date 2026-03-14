"use client";

export type VaultCartItem = {
  productId: string;
  addedAt: string;
};

const STORAGE_KEY = "octalve_vault_cart";
const EVENT_NAME = "octalve-vault-cart-updated";

function isBrowser() {
  return typeof window !== "undefined";
}

export function readVaultCart(): VaultCartItem[] {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as VaultCartItem[];
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item) =>
        item &&
        typeof item.productId === "string" &&
        typeof item.addedAt === "string",
    );
  } catch {
    return [];
  }
}

export function writeVaultCart(cart: VaultCartItem[]) {
  if (!isBrowser()) return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addVaultCartItem(productId: string) {
  const cart = readVaultCart();

  const exists = cart.some((item) => item.productId === productId);
  if (exists) return;

  writeVaultCart([
    ...cart,
    {
      productId,
      addedAt: new Date().toISOString(),
    },
  ]);
}

export function removeVaultCartItem(productId: string) {
  const cart = readVaultCart();
  writeVaultCart(cart.filter((item) => item.productId !== productId));
}

export function clearVaultCart() {
  writeVaultCart([]);
}

export function vaultCartHasItem(productId: string) {
  return readVaultCart().some((item) => item.productId === productId);
}

export function subscribeVaultCart(callback: () => void) {
  if (!isBrowser()) return () => {};

  const handler = () => callback();

  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener("storage", handler);
  };
}
