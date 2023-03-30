import { useRef } from "react";
import ReactMarkdown from 'react-markdown'
import RemarkMath from "remark-math";
import RemarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { copyToClipboard } from '../../../common/utils';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// or use theme like this
// import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import "./markdown.scss";

interface MarkdownProps {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return <div className="markdown-body">
    <ReactMarkdown
      children={content}
      remarkPlugins={[RemarkMath, RemarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          return <PreCode node={node} inline={inline} className={className} children={children} />
        }
      }}
    />
  </div>
}

const PreCode = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { className, children } = props
  const match = /language-(\w+)/.exec(className || '') || ''

  return (
    <div ref={ref}>
      <span
        className="copy-code-button"
        onClick={() => {
          if (ref.current) {
            const code = ref.current.innerText;
            copyToClipboard(code);
          }
        }}
      />
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        language={match && match[1]}
        style={oneDark}
        PreTag="div"
      />
    </div>
  );
}