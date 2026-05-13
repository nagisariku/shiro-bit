'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import {
  IconMicrophone,
  IconPaperclip,
  IconPlus,
  IconSearch,
  IconSend,
  IconSparkles,
  IconWaveSine,
} from '@tabler/icons-react'
import { useRef, useState } from 'react'

interface AiInputProps {
  onSubmit?: (message: string) => void
  hideTitle?: boolean
}

export default function AiInput({ onSubmit, hideTitle }: AiInputProps) {
  const [message, setMessage] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (message.trim()) {
      if (onSubmit) {
        onSubmit(message.trim())
      }
      setMessage('')
      setIsExpanded(false)

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }

    setIsExpanded(e.target.value.length > 100 || e.target.value.includes('\n'))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <div className="w-full">
      {!hideTitle && (
        <h1 className="paragraph-hero mx-auto mb-8 max-w-2xl whitespace-pre-wrap px-1 text-center">
          How can I help you today?
        </h1>
      )}

      <form onSubmit={handleSubmit} className="group/composer w-full">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="sr-only"
          onChange={(e) => {}}
        />

        <div
          className={cn(
            'dark:bg-muted/50 mx-auto w-full max-w-screen-lg cursor-text overflow-clip border border-border-subtle bg-transparent bg-clip-padding p-2.5 transition-[border-radius] duration-200 ease-out',
            isExpanded
              ? "grid rounded-3xl [grid-template-areas:'header'_'primary'_'footer'] [grid-template-columns:1fr] [grid-template-rows:auto_1fr_auto]"
              : "grid rounded-3xl [grid-template-areas:'header_header_header'_'leading_primary_trailing'_'._footer_.'] [grid-template-columns:auto_1fr_auto] [grid-template-rows:auto_1fr_auto]",
          )}
        >
          <div
            className={cn(
              'flex min-h-14 items-center overflow-x-hidden px-1.5',
              {
                'mb-0 px-2 py-1': isExpanded,
                '-my-2.5': !isExpanded,
              },
            )}
            style={{ gridArea: 'primary' }}
          >
            <div className="max-h-52 flex-1 overflow-auto">
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything"
                className="placeholder:text-muted-foreground scrollbar-thin min-h-0 resize-none rounded-none border-0 p-0 ps-2 text-base focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent md:text-lg"
                rows={1}
              />
            </div>
          </div>

          {/* <div
            className={cn('flex', { hidden: isExpanded })}
            style={{ gridArea: 'leading' }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full outline-none ring-0 hover:bg-accent"
                  aria-label="Add attachments"
                >
                  <IconPlus className="text-muted-foreground size-6" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="max-w-xs rounded-2xl p-1.5"
              >
                <DropdownMenuGroup className="space-y-1">
                  <DropdownMenuItem
                    className="rounded-md"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <IconPaperclip size={20} className="opacity-60" />
                    Add photos & files
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md" onClick={() => {}}>
                    <div className="flex items-center gap-2">
                      <IconSparkles size={20} className="opacity-60" />
                      Agent mode
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md" onClick={() => {}}>
                    <IconSearch size={20} className="opacity-60" />
                    Deep Research
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}

          <div
            className="flex items-center gap-2"
            style={{ gridArea: isExpanded ? 'footer' : 'trailing' }}
          >
            <div className="ms-auto flex items-center gap-1.5">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-accent"
                aria-label="Record audio message"
              >
                <IconMicrophone className="text-muted-foreground size-5" />
              </Button>

              {/* <Button
                type="button"
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 rounded-full hover:bg-accent"
                aria-label="Audio visualization"
              >
                <IconWaveSine className="text-muted-foreground size-5" />
              </Button> */}

              {message.trim() && (
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full"
                  aria-label="Send message"
                >
                  <IconSend className="size-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
