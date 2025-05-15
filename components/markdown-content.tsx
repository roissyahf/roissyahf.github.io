"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Image from "next/image"

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      className={`markdown-content ${className}`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-lg font-bold mt-4 mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="mb-4 text-muted-foreground" {...props} />,
        a: ({ node, ...props }) => (
          <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
        ),
        ul: ({ node, ...props }) => <ul className="mb-4 ml-6 list-disc text-muted-foreground" {...props} />,
        ol: ({ node, ...props }) => <ol className="mb-4 ml-6 list-decimal text-muted-foreground" {...props} />,
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
        ),
        hr: ({ node, ...props }) => <hr className="my-6 border-border" {...props} />,
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-muted" {...props} />,
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => <tr className="border-b border-border" {...props} />,
        th: ({ node, ...props }) => <th className="p-2 text-left font-semibold" {...props} />,
        td: ({ node, ...props }) => <td className="p-2 text-muted-foreground" {...props} />,
        img: ({ node, src, alt, ...props }) => {
          if (src) {
            return (
              <div className="relative my-6 overflow-hidden rounded-lg">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt || ""}
                  width={800}
                  height={450}
                  className="object-cover"
                  {...props}
                />
              </div>
            )
          }
          return null
        },
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" className="rounded-md my-4" {...props}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>
              {children}
            </code>
          )
        },
        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
        em: ({ node, ...props }) => <em className="italic" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
