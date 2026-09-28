"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ArrowUpIcon, KeyRoundIcon, SettingsIcon, SparklesIcon, SquarePenIcon, Trash2Icon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remend from "remend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { lessons } from "./lessons";

const MODELS = [
  { value: "free", label: "Free models" },
  { value: "openai/gpt-6-luna", label: "GPT-6 Luna" },
  { value: "deepseek/deepseek-v4.1-flash", label: "DeepSeek V4.1 Flash" },
  { value: "xiaomi/mimo-v2.6-flash", label: "MiMo V2.6 Flash" },
  { value: "z-ai/glm-5.3-flash", label: "GLM-5.3 Flash" },
  { value: "custom", label: "Custom model…" },
];

const SUGGESTIONS = [
  "Explain this lesson in one sentence",
  "Show me another example",
  "What mistakes do beginners make here?",
];

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function get(key: string) {
  try {
    return localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function set(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
  window.dispatchEvent(new StorageEvent("storage", { key }));
}

function useStored(key: string) {
  return useSyncExternalStore(subscribe, () => get(key), () => "");
}

function useWide() {
  return useSyncExternalStore(
    (onChange) => {
      const query = matchMedia("(min-width: 800px)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => matchMedia("(min-width: 800px)").matches,
    () => true,
  );
}

function Settings({ onDone }: { onDone: () => void }) {
  const key = useStored("ai-key");
  const model = useStored("ai-model");
  const known = MODELS.some((m) => m.value === model);
  const [custom, setCustom] = useState(Boolean(model) && !known);
  const selected = custom ? "custom" : model || "free";

  return (
    <div className="flex flex-col gap-3">
      <section className="flex flex-col gap-3 rounded-xl border bg-bg p-4">
        <div>
          <p className="text-sm font-medium text-fg">OpenRouter API key</p>
          <p className="text-[13px] leading-snug">
            Optional. Unlocks more models and removes the free limit. Stays in this browser and is never stored on
            the server.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <KeyRoundIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" />
            <Input
              type="password"
              value={key}
              onChange={(e) => set("ai-key", e.target.value)}
              placeholder="sk-or-…"
              autoComplete="off"
              aria-label="OpenRouter API key"
              className="pl-9"
            />
          </div>
          {key && (
            <Button
              variant="outline"
              className="hover:border-danger hover:text-danger"
              onClick={() => {
                set("ai-key", "");
                set("ai-model", "");
                setCustom(false);
              }}
            >
              <Trash2Icon />
              Remove
            </Button>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-3 rounded-xl border bg-bg p-4">
        <div>
          <p className="text-sm font-medium text-fg">Model</p>
          <p className="text-[13px] leading-snug">
            {key ? "Pick a model for your key." : "Add your key to pick a model. Free models are used until then."}
          </p>
        </div>
        <Select
          items={MODELS}
          value={selected}
          disabled={!key}
          onValueChange={(value) => {
            setCustom(value === "custom");
            if (value !== "custom") set("ai-model", value === "free" ? "" : String(value));
          }}
        >
          <SelectTrigger className="w-full" aria-label="Model">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MODELS.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {custom && key && (
          <Input
            value={known ? "" : model}
            onChange={(e) => set("ai-model", e.target.value)}
            placeholder="vendor/model-id"
            aria-label="Custom model ID"
          />
        )}
      </section>
      <Button className="self-end" onClick={onDone}>
        Done
      </Button>
    </div>
  );
}

export function AskTrigger() {
  const slug = usePathname().split("/")[1];
  if (!lessons.some((l) => l.slug === slug)) return null;
  return (
    <Button
      variant="ghost"
      size="sm"
      className="ask-trigger max-sm:size-8 max-sm:px-0"
      onClick={() => window.dispatchEvent(new CustomEvent("ask-ai-toggle"))}
      aria-keyshortcuts="Meta+I Control+I"
      aria-label="Ask AI"
    >
      <SparklesIcon />
      <span className="max-sm:hidden">Ask AI</span>
      <Kbd className="max-sm:hidden">⌘I</Kbd>
    </Button>
  );
}

export default function AskAI() {
  const slug = usePathname().split("/")[1];
  const lesson = lessons.find((l) => l.slug === slug);
  const key = useStored("ai-key");
  const wide = useWide();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, setMessages, stop, clearError, status, error } = useChat({
    id: slug,
    transport: new DefaultChatTransport({
      api: "/api/ask",
      headers: (): Record<string, string> => (get("ai-key") ? { "x-openrouter-key": get("ai-key") } : {}),
      body: () => ({ slug, model: get("ai-model") }),
    }),
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    function onAsk(e: Event) {
      const question = (e as CustomEvent<string | undefined>).detail;
      setOpen(true);
      setSettings(false);
      if (question && !busy) sendMessage({ text: question });
    }
    function onToggle() {
      setOpen((o) => !o);
    }
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("ask-ai", onAsk);
    window.addEventListener("ask-ai-toggle", onToggle);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("ask-ai", onAsk);
      window.removeEventListener("ask-ai-toggle", onToggle);
      window.removeEventListener("keydown", onKey);
    };
  }, [busy, sendMessage]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, status]);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-ask-open", open && Boolean(lesson));
  }, [open, lesson]);

  if (!lesson) return null;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || busy) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={!wide} disablePointerDismissal={wide}>
      <SheetContent
        side={wide ? "right" : "bottom"}
        overlay={!wide}
        showCloseButton={false}
        initialFocus={inputRef}
        className="gap-0 shadow-xl data-[side=bottom]:h-[85dvh] data-[side=bottom]:rounded-t-xl data-[side=right]:w-[400px] data-[side=right]:sm:max-w-none"
      >
        <header className="flex h-[52px] shrink-0 items-center gap-2 border-b px-4">
          <SparklesIcon className="size-4 text-brand" />
          <SheetTitle className="text-sm">Ask AI</SheetTitle>
          <Badge>{key ? "Your key" : "Free"}</Badge>
          <Button
            variant="ghost"
            size="icon-sm"
            className="ml-auto"
            aria-label="New chat"
            title="New chat"
            disabled={messages.length === 0 && !error}
            onClick={() => {
              stop();
              setMessages([]);
              clearError();
              setSettings(false);
              inputRef.current?.focus();
            }}
          >
            <SquarePenIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Settings"
            title="Settings"
            aria-pressed={settings}
            onClick={() => setSettings((s) => !s)}
          >
            <SettingsIcon />
          </Button>
          <SheetClose render={<Button variant="ghost" size="icon-sm" aria-label="Close" />}>
            <XIcon />
          </SheetClose>
        </header>
        <SheetDescription className="sr-only">Ask questions about {lesson.title}</SheetDescription>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
          {settings ? (
            <Settings onDone={() => setSettings(false)} />
          ) : messages.length === 0 ? (
            <div className="mt-auto flex flex-col gap-3">
              <p className="text-[13px] text-fg-subtle">About {lesson.title}</p>
              <p className="text-fg">Stuck on something? Ask in plain words.</p>
              <div className="flex flex-col gap-2">
                {SUGGESTIONS.map((s) => (
                  <Button
                    key={s}
                    variant="outline"
                    className="h-auto justify-start py-2 text-left font-normal whitespace-normal text-fg-muted hover:text-fg"
                    onClick={() => sendMessage({ text: s })}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) =>
              m.role === "user" ? (
                <div key={m.id} className="ml-auto max-w-[85%] rounded-xl bg-surface px-3 py-2 text-[14px] leading-[1.6] text-fg">
                  {m.parts.map((part) => (part.type === "text" ? part.text : "")).join("")}
                </div>
              ) : (
                <div
                  key={m.id}
                  className="flex flex-col gap-3 text-[14px] leading-[1.7] [&_:not(pre)>code]:px-[5px] [&_:not(pre)>code]:py-0 [&_:not(pre)>code]:text-[0.85em] [&_:not(pre)>code]:[box-decoration-break:clone] [&_:not(pre)>code]:wrap-break-word [&_blockquote]:border-l-2 [&_blockquote]:border-fg-subtle [&_blockquote]:pl-3 [&_h1,&_h2,&_h3,&_h4]:mt-2 [&_h1,&_h2,&_h3,&_h4]:text-[15px] [&_h1,&_h2,&_h3,&_h4]:font-medium [&_li+li]:mt-2 [&_li::marker]:text-fg-subtle [&_ol]:list-decimal [&_ol]:pl-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-bg [&_pre]:p-3 [&_pre]:font-mono [&_pre]:text-[13px] [&_table]:block [&_table]:overflow-x-auto [&_table]:text-sm [&_td,&_th]:border-b [&_td,&_th]:px-3 [&_td,&_th]:py-1.5 [&_td,&_th]:text-left [&_ul]:list-disc [&_ul]:pl-5"
                >
                  {m.parts.map((part, i) =>
                    part.type === "text" ? (
                      <Markdown key={i} remarkPlugins={[remarkGfm]}>
                        {remend(part.text)}
                      </Markdown>
                    ) : null,
                  )}
                </div>
              ),
            )
          )}
          {!settings && status === "submitted" && <p className="animate-pulse text-sm text-fg-subtle">Thinking…</p>}
          {!settings && error && <p className="text-sm text-danger">{error.message}</p>}
          <div ref={endRef} />
        </div>

        <form onSubmit={submit} className="flex shrink-0 flex-col gap-2 border-t p-3">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about this lesson…"
              aria-label="Your question"
              maxLength={500}
            />
            <Button type="submit" size="icon" className="size-9" disabled={busy || !input.trim()} aria-label="Send">
              <ArrowUpIcon />
            </Button>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-fg-subtle max-sm:hidden">
            <Kbd>⌘I</Kbd> to toggle · Answers can be wrong, check the lesson.
          </p>
        </form>
      </SheetContent>
    </Sheet>
  );
}
