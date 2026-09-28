"use client";

import { SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { askAI } from "./ask";

export default function AskButton({ question }: { question: string }) {
  return (
    <Button variant="ghost" size="xs" onClick={() => askAI(question)}>
      <SparklesIcon className="text-brand" />
      Ask
    </Button>
  );
}
