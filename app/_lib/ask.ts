export function askAI(question?: string) {
  window.dispatchEvent(new CustomEvent("ask-ai", { detail: question }));
}
