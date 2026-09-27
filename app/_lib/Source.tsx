import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { codeToHtml } from "shiki";

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
    <figure className="source">
      {title && <figcaption>{title}</figcaption>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {output !== null && <pre className="output">{output}</pre>}
    </figure>
  );
}
