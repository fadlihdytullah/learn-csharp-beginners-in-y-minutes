import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { codeToHtml } from "shiki";
import AskButton from "./AskButton";
import CopyButton from "./CopyButton";

type Props = { file?: string; code?: string; title?: string; lang?: string };

export default async function Source({ file, code = "", title, lang = "csharp" }: Props) {
  let output: string | null = null;

  if (file) {
    const full = path.join(/*turbopackIgnore: true*/ process.cwd(), file);
    code = readFileSync(full, "utf8");
    title = file;
    const out = full.replace(/\.cs$/, ".txt");
    if (existsSync(out)) output = readFileSync(out, "utf8").trimEnd();
  }

  const html = await codeToHtml(code.trim(), {
    lang,
    themes: { light: "github-light", dark: "vesper" },
    defaultColor: false,
  });

  return (
    <figure className="overflow-hidden rounded-xl border bg-bg-elev">
      {title && (
        <figcaption className="flex items-center gap-2 border-b bg-surface px-4 py-2.5 font-mono text-[12px] text-fg-muted before:size-1.5 before:rounded-full before:bg-fg-subtle before:content-['']">
          {title}
          <span className="-my-1.5 ml-auto flex items-center gap-1 font-sans">
            {file && <AskButton question={`Explain ${path.basename(file)} line by line.`} />}
            <CopyButton text={code.trim()} />
          </span>
        </figcaption>
      )}
      <div className="[&_pre]:bg-transparent! [&_pre]:px-5 [&_pre]:py-[18px] [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-[1.7] [&_pre]:overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />
      {output !== null && <pre className="overflow-x-auto border-t border-dashed border-border-strong bg-bg px-5 py-[18px] font-mono text-[13px] leading-[1.7] whitespace-pre-wrap text-fg-muted before:mb-1.5 before:block before:font-sans before:text-[12px] before:text-fg-subtle before:content-['Output']">
          {output}
        </pre>}
    </figure>
  );
}
