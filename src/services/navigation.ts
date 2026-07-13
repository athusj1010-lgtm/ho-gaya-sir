// frontend/src/services/navigation.ts

export type Page =
  | "login"
  | "signup"
  | "onboarding"
  | "home"
  | "voice";

const KEY = "page";

export function getPage(): Page {
  return (
    (localStorage.getItem(KEY) as Page) ||
    "login"
  );
}

function setPage(page: Page) {
  localStorage.setItem(KEY, page);

  window.dispatchEvent(
    new Event("page-change")
  );
}

export function openLogin() {
  setPage("login");
}

export function openSignup() {
  setPage("signup");
}

export function openOnboarding() {
  setPage("onboarding");
}

export function openHome() {
  setPage("home");
}

export function openVoiceMode() {
  setPage("voice");
}