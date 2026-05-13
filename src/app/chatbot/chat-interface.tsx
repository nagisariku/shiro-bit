'use client'

import React from 'react'
import { useChat } from '@ai-sdk/react'
import type { TextUIPart, ReasoningUIPart } from 'ai'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AiInput from '@/components/ai-elements/ai-input'
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
} from '@/components/ai-elements/conversation'
import { BlurFade } from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-white focus:outline-none"
      title="Copy code"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

export function ChatInterface() {
  const { messages, sendMessage, status } = useChat()

  const isLoading = status === 'submitted' || status === 'streaming'

  const handleSubmit = (text: string) => {
    sendMessage({
      text,
    })
  }

  const isActive = messages.length > 0 || isLoading
  const lastMsg = messages[messages.length - 1]
  const isThinking =
    status === 'submitted' ||
    (status === 'streaming' &&
      lastMsg?.role === 'assistant' &&
      !lastMsg.parts?.some(
        (part) => part.type === 'text' || part.type === 'reasoning',
      ) &&
      !(lastMsg as any).content)

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      {/* Hero Title & Description - Hidden when conversation starts */}
      {!isActive && (
        <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
          <BlurFade delay={0.1}>
            <h1 className="page-title">AI CS</h1>
            <p className="page-subtitle">
              An intelligent AI chatbot. Ask anything about our company,
              services, products, or support and get instant answers.
            </p>
          </BlurFade>
        </section>
      )}

      {/* Chat Container */}
      <div
        className={cn(
          'mx-auto flex w-full max-w-screen-lg flex-col transition-all duration-300',
          isActive ? 'h-[75vh]' : 'h-[50vh] min-h-[400px]',
        )}
      >
        <Conversation>
          <ConversationContent>
            {messages.length === 0 && !isThinking ? (
              <ConversationEmptyState />
            ) : (
              <>
                {messages.map((msg) => {
                  const textContent = msg.parts
                    ? msg.parts
                        .filter(
                          (part): part is TextUIPart => part.type === 'text',
                        )
                        .map((part) => part.text)
                        .join('')
                    : (msg as any).content || ''

                  const reasoningContent = msg.parts
                    ? msg.parts
                        .filter(
                          (part): part is ReasoningUIPart =>
                            part.type === 'reasoning',
                        )
                        .map((part) => part.text)
                        .join('')
                    : ''

                  // If a message is from the assistant but has neither text nor reasoning yet (e.g. streaming just started), we can avoid rendering an empty bubble
                  const hasContent =
                    textContent.trim().length > 0 ||
                    reasoningContent.trim().length > 0
                  if (msg.role === 'assistant' && !hasContent) {
                    return null
                  }

                  return (
                    <div
                      key={msg.id}
                      className={cn(
                        'flex w-full flex-col gap-2',
                        msg.role === 'user' ? 'items-end' : 'items-start',
                      )}
                    >
                      {reasoningContent && (
                        <div className="border-muted-foreground/20 bg-muted/30 text-muted-foreground max-w-[80%] whitespace-pre-wrap rounded-2xl border px-4 py-2.5 text-xs italic leading-relaxed md:text-sm">
                          <div className="mb-1 flex items-center gap-1.5 font-semibold not-italic text-foreground/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                            Thought Process
                          </div>
                          {reasoningContent}
                        </div>
                      )}
                      {textContent && (
                        <div
                          className={cn(
                            'max-w-[80%] break-words rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-all md:text-base',
                            msg.role === 'user'
                              ? 'border border-zinc-800 bg-zinc-900 text-zinc-100 shadow-md dark:border-zinc-200 dark:bg-zinc-100 dark:text-zinc-900'
                              : 'bg-muted prose prose-sm max-w-none text-foreground dark:prose-invert',
                          )}
                        >
                          {msg.role === 'user' ? (
                            <div className="flex flex-col items-end">
                              {/* <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                You
                              </span> */}
                              <p className="whitespace-pre-wrap text-right leading-relaxed">
                                {textContent}
                              </p>
                            </div>
                          ) : (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                pre({ children }: any) {
                                  const codeElement = React.isValidElement(
                                    children,
                                  )
                                    ? children
                                    : null
                                  const props = codeElement
                                    ? (codeElement.props as any)
                                    : {}
                                  const className = props.className || ''
                                  const match = /language-(\w+)/.exec(className)
                                  const lang = match ? match[1] : 'text'
                                  const codeString = String(
                                    props.children || '',
                                  ).replace(/\n$/, '')

                                  return (
                                    <div className="not-prose my-4 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg dark:bg-zinc-950">
                                      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2 text-xs text-zinc-400">
                                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                          {lang}
                                        </span>
                                        <CopyButton text={codeString} />
                                      </div>
                                      <pre className="m-0 overflow-x-auto bg-transparent p-4 font-mono text-xs text-zinc-100 md:text-sm">
                                        <code className={className}>
                                          {props.children}
                                        </code>
                                      </pre>
                                    </div>
                                  )
                                },
                                code({
                                  inline,
                                  className,
                                  children,
                                  ...props
                                }: any) {
                                  return (
                                    <code
                                      className="bg-muted-foreground/15 rounded px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground md:text-sm"
                                      {...props}
                                    >
                                      {children}
                                    </code>
                                  )
                                },
                              }}
                            >
                              {textContent}
                            </ReactMarkdown>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Thinking Loader */}
                {isThinking && (
                  <div className="flex w-full flex-col items-start gap-2">
                    <div className="bg-muted/60 text-muted-foreground flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:0.2s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:0.4s]" />
                      </div>
                      <span className="font-medium tracking-wide">
                        Thinking...
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
          </ConversationContent>
        </Conversation>

        <div className="mt-auto pb-8 pt-4">
          <AiInput onSubmit={handleSubmit} hideTitle={isActive} />
        </div>
      </div>
    </div>
  )
}
