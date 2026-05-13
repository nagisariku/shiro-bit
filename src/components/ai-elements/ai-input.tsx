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
import { useEffect, useRef, useState } from 'react'

interface AiInputProps {
  onSubmit?: (message: string) => void
  hideTitle?: boolean
}

export default function AiInput({ onSubmit, hideTitle }: AiInputProps) {
  const [message, setMessage] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)

  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const toggleRecording = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      setIsRecording(false)
    } else {
      const SpeechRecognitionAPI =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition
      if (!SpeechRecognitionAPI) {
        alert(
          'Speech recognition is not supported in your browser. Please try using Chrome, Edge, or Safari.',
        )
        return
      }

      try {
        const recognition = new SpeechRecognitionAPI()
        recognition.continuous = true
        recognition.interimResults = true

        const startMessage = message

        recognition.onresult = (event: any) => {
          let sessionTranscript = ''
          for (let i = 0; i < event.results.length; ++i) {
            sessionTranscript += event.results[i][0].transcript
          }
          const fullText = startMessage
            ? `${startMessage} ${sessionTranscript}`
            : sessionTranscript
          setMessage(fullText)

          if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
          }
          setIsExpanded(fullText.length > 100 || fullText.includes('\n'))
        }

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error)
          setIsRecording(false)
        }

        recognition.onend = () => {
          setIsRecording(false)
        }

        recognition.start()
        recognitionRef.current = recognition
        setIsRecording(true)
      } catch (err) {
        console.error('Failed to start speech recognition:', err)
        setIsRecording(false)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      setIsRecording(false)
    }

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
                placeholder={isRecording ? 'Listening...' : 'Ask anything'}
                className="placeholder:text-muted-foreground scrollbar-thin min-h-0 resize-none rounded-none border-0 p-0 ps-2 text-base focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent md:text-lg"
                rows={1}
              />
            </div>
          </div>

          <div
            className="flex items-center gap-2"
            style={{ gridArea: isExpanded ? 'footer' : 'trailing' }}
          >
            <div className="ms-auto flex items-center gap-1.5">
              {isRecording && (
                <span className="flex items-center gap-1 text-xs font-medium text-red-500 animate-pulse px-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Recording
                </span>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={toggleRecording}
                className={cn(
                  'rounded-full hover:bg-accent transition-all duration-200',
                  isRecording && 'bg-red-500/10 hover:bg-red-500/20',
                )}
                aria-label={
                  isRecording ? 'Stop recording' : 'Record audio message'
                }
                title={isRecording ? 'Stop recording' : 'Record audio message'}
              >
                <IconMicrophone
                  className={cn(
                    'size-5',
                    isRecording
                      ? 'text-red-500 animate-pulse'
                      : 'text-muted-foreground',
                  )}
                />
              </Button>

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
