"use client";

import confetti from "canvas-confetti";
import { CheckIcon, SparklesIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { askAI } from "./ask";
import { markComplete } from "./progress";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

function Text({ children }: { children: string }) {
  return children.split("`").map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part));
}

const card = "flex flex-col gap-4 rounded-xl border bg-bg-elev p-6 [main>&]:mt-14";

export default function Quiz({ questions }: { questions: Question[] }) {
  const slug = usePathname().split("/")[1];
  const [picks, setPicks] = useState<number[] | null>(null);
  const [round, setRound] = useState(0);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setPicks(questions.map((_, i) => Number(data.get(`q${i}`))));
    markComplete(slug);
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.75 }, disableForReducedMotion: true });
  }

  if (picks) {
    const score = questions.filter((q, i) => picks[i] === q.answer).length;
    return (
      <section className={card}>
        <div className="flex items-center gap-3">
          <h2>Quick quiz</h2>
          <Badge>
            {score}/{questions.length} correct
          </Badge>
        </div>
        {questions.map((q, i) => {
          const right = picks[i] === q.answer;
          return (
            <div key={i} className="flex flex-col gap-2">
              <p className="font-medium text-fg">
                {i + 1}. <Text>{q.q}</Text>
              </p>
              {!right && (
                <p className="flex items-center gap-2.5 rounded-lg border border-danger px-3 py-2 text-fg-muted">
                  <XIcon className="size-4 shrink-0 text-danger" />
                  <span>
                    <Text>{q.options[picks[i]]}</Text>
                  </span>
                </p>
              )}
              <p className="flex items-center gap-2.5 rounded-lg border border-success px-3 py-2 text-fg">
                <CheckIcon className="size-4 shrink-0 text-success" />
                <span>
                  <Text>{q.options[q.answer]}</Text>
                </span>
              </p>
              <p className="mt-1 border-l-2 border-fg-subtle pl-3 text-sm">
                <Text>{q.explanation}</Text>
              </p>
              {!right && (
                <Button
                  variant="link"
                  size="xs"
                  className="self-start text-[13px]"
                  onClick={() =>
                    askAI(
                      `In the quiz, "${q.q}", I picked "${q.options[picks[i]]}" but the answer is "${q.options[q.answer]}". Why?`,
                    )
                  }
                >
                  <SparklesIcon className="text-brand" />
                  Ask AI why
                </Button>
              )}
            </div>
          );
        })}
        <Button
          className="self-start"
          onClick={() => {
            setPicks(null);
            setRound((r) => r + 1);
          }}
        >
          Try again
        </Button>
      </section>
    );
  }

  return (
    <Questionnaire key={round} onSubmit={submit} shortcuts="numbers" className={card}>
      <div className="flex items-center justify-between gap-3">
        <h2>Quick quiz</h2>
        <QuestionnaireProgress className="min-h-0 w-auto min-w-0" />
      </div>
      {questions.map((q, i) => (
        <QuestionnaireItem key={i} name={`q${i}`} required>
          <QuestionnaireTitle className="mb-3! text-[15px] text-fg">
            <Text>{q.q}</Text>
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            {q.options.map((option, j) => (
              <QuestionnaireChoice key={j} value={String(j)} className="text-[15px] text-fg-muted data-checked:text-fg">
                <span>
                  <Text>{option}</Text>
                </span>
              </QuestionnaireChoice>
            ))}
          </QuestionnaireChoices>
        </QuestionnaireItem>
      ))}
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Check answers</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}
