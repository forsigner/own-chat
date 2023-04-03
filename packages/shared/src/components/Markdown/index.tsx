import { FC, PropsWithChildren, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkMath from 'remark-math'
import RemarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// or use theme like this
// import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { copyToClipboard } from '../../common'
import './markdown.scss'

interface MarkdownProps {
  content: string
}

export const Markdown: FC<PropsWithChildren<MarkdownProps>> = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[RemarkMath, RemarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            return (
              <Code node={node} className={className}>
                {children}
              </Code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

interface CodeProps {
  node: any
  className?: string
}

const Code: FC<PropsWithChildren<CodeProps>> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { className, children } = props
  const match = /language-(\w+)/.exec(className || '') || ''

  return (
    <div ref={ref} className="pre-code">
      <span
        className="copy-code-button"
        onClick={() => {
          if (ref.current) {
            const code = ref.current.innerText
            copyToClipboard(code)
          }
        }}
      />
      <SyntaxHighlighter language={match && match[1]} style={oneDark} PreTag="div">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}
