import { codeToHtml, type BundledLanguage } from "shiki";
import { CopyButton } from "@snowztech/ui/client";

interface CodeProps {
  children: string;
  lang?: BundledLanguage;
  filename?: string;
}

export async function Code({ children, lang = "tsx", filename }: CodeProps) {
  const html = await codeToHtml(children.trim(), {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark-default",
    },
    defaultColor: false,
  });

  return (
    <div className="code-block">
      {filename && <div className="code-block-filename">{filename}</div>}
      <div className="code-block-body">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="code-block-actions">
          <CopyButton value={children.trim()} />
        </div>
      </div>
    </div>
  );
}
