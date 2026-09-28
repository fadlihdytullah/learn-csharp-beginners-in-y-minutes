"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CopyButton({
  text,
  compact = false,
  className,
}: {
  text: string | (() => string);
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(typeof text === "function" ? text() : text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  const label = copied ? "Copied" : "Copy";
  return (
    <Button
      variant="ghost"
      size={compact ? "icon-sm" : "xs"}
      className={className}
      onClick={copy}
      aria-label={compact ? label : undefined}
      title={compact ? label : undefined}
    >
      {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
      {!compact && label}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </Button>
  );
}
