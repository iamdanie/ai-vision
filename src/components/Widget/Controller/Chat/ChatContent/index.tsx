'use client'
import { Input } from '~/components/Input'
import { cn } from '~/utils'
import { Button } from '~/components/Button'
import BotIcon from './BotIcon'
import { SendHorizontalIcon, SmileIcon, X } from 'lucide-react'
import {
  ORDINARY_SEARCH_RESULTS,
  TAILORED_AI_RESULTS,
  DEFAULT_ANSWER,
  CHAT_ANSWERS,
} from './constants'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThreeDots } from 'react-loader-spinner'
import { atom, useAtom } from 'jotai'
import { messages as messageHistory } from '~/components/Widget/widget.context'
import type { ChatMessage, Resource } from '~/components/Widget/widget.context'
import ScrollToBottom from 'react-scroll-to-bottom'
import { useRouter } from 'next/navigation'
const ChatContent = () => {
  const router = useRouter()
  const [messages, setMessages] = useAtom(
    useMemo(
      () =>
        atom(
          (get) => get(messageHistory),
          (get, set, newValue) =>
            set(messageHistory, [
              ...get(messageHistory),
              newValue as ChatMessage,
            ]),
        ),
      [],
    ),
  )

  useEffect(() => {
    if (messages.length === 0) {
      setMessages({
        id: '1',
        Content: () =>
          'Yo! 🤖 I guess you came here to look good. How can i help you out with that?',
        role: 'ai',
        isLast: true,
      })
    }
  }, [])

  const [input, setInput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const getMessageKey = (input: string) => {
    if (
      input.toLowerCase().includes('prada') ||
      input.toLowerCase().includes('shoes')
    ) {
      return ORDINARY_SEARCH_RESULTS
    }
    if (
      input.toLowerCase().includes('own') ||
      input.toLowerCase().includes('custom') ||
      input.toLowerCase().includes('outfit')
    ) {
      return TAILORED_AI_RESULTS
    }
    return DEFAULT_ANSWER
  }

  const deferMessageResponse = (response: any) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        setMessages(response)
        resolve(response)
      }, 1500)
    })
  }

  const handleSendMessage = async () => {
    setMessages({
      id: uuidv4(),
      Content: () => <>{input}</>,
      role: 'user',
    })
    setInput('')
    const htmlInput = document.getElementById(`editor`)
    if (htmlInput) {
      htmlInput.innerHTML = ''
    }

    const responses: ChatMessage[] = CHAT_ANSWERS?.[getMessageKey(input)] ?? []
    responses[responses.length - 1].isLast = true
    const inGroup: boolean = responses.length > 1

    for (let response of responses) {
      response.inGroup = inGroup
      setLoading(true)
      await deferMessageResponse(response)
      setLoading(false)
    }
  }

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && input.length > 0) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  const handleClickMessage = (clickable: boolean, searchType: string) => {
    if (clickable) {
      router.push(`/searchResults?type=${searchType}`)
    }
  }

  return (
    <div className="grid h-full w-full grid-rows-[2.25rem,auto,auto]">
      <div className="flex h-9 w-full flex-row items-center justify-between bg-[#E3B04B] px-4 text-sm font-normal text-white">
        <div className="flex flex-row items-center gap-2">
          <BotIcon />
          <div className="flex items-center rounded-md bg-white px-2 text-xs font-semibold text-[#2B2B28]">
            AI
          </div>
          O2F Fashion assistant
        </div>
        <X size={14} />
      </div>
      <ScrollToBottom>
        <div className="flex max-h-[340px] min-h-[325px] flex-col p-4">
          {messages.map(
            ({
              role,
              id,
              resources,
              isLast,
              inGroup,
              Content,
            }: ChatMessage) => (
              <div
                className={cn(
                  'mb-3 flex max-w-[247px] flex-row items-end',
                  role === 'user' ? 'self-end' : 'self-start',
                  inGroup && !isLast && 'mb-1',
                  inGroup && isLast && 'mb-3',
                )}
                key={id}
              >
                {role === 'ai' && (
                  <div className="mr-6 w-0">{isLast && <BotIcon />}</div>
                )}
                <div className="flex flex-col">
                  <div
                    className={cn(
                      'flex flex-col rounded-lg px-2 py-[6px] text-sm font-normal',
                      role === 'user'
                        ? 'bg-[#E3B04B] text-white'
                        : 'ml-1 bg-[#F3F6F8]',
                    )}
                  >
                    <Content metadata={{ setLoading, router, setMessages }} />
                    {(resources as Resource) && (
                      <div className="mx-0 w-full border-t border-t-gray-200 px-0 text-sm font-normal ">
                        <div className="mt-2 flex flex-row flex-wrap gap-1">
                          {`Source:`}
                          <span className="text-[#086BD5]">
                            {
                              //@ts-ignore
                              resources?.title
                            }
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
          {loading && (
            <div className="w-fit items-center justify-center rounded-lg bg-[#F3F6F8] p-2">
              <ThreeDots
                height="20"
                width="20"
                color="#687882"
                visible={loading}
              />
            </div>
          )}
        </div>
      </ScrollToBottom>
      <div className="relative mt-2 pt-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <div className="absoulute flex flex-col pb-1">
          <div className="mb-4 flex h-full flex-row items-center gap-1 pl-3">
            <div>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M7 14.75C5.05859 14.75 3.5 13.1914 3.5 11.25V3.375C3.5 1.95312 4.67578 0.75 6.125 0.75C7.54688 0.75 8.75 1.95312 8.75 3.375V10.375C8.75 11.3594 7.95703 12.125 7 12.125C6.01562 12.125 5.25 11.3594 5.25 10.375V4.6875C5.25 4.46875 5.44141 4.25 5.6875 4.25C5.90625 4.25 6.125 4.46875 6.125 4.6875V10.375C6.125 10.8672 6.50781 11.25 7 11.25C7.46484 11.25 7.875 10.8672 7.875 10.375V3.375C7.875 2.41797 7.08203 1.625 6.125 1.625C5.14062 1.625 4.375 2.41797 4.375 3.375V11.25C4.375 12.6992 5.55078 13.875 7 13.875C8.42188 13.875 9.625 12.6992 9.625 11.25V4.6875C9.625 4.46875 9.81641 4.25 10.0625 4.25C10.2812 4.25 10.5 4.46875 10.5 4.6875V11.25C10.5 13.1914 8.91406 14.75 7 14.75Z"
                  fill="#086BD5"
                />
              </svg>
            </div>
            <Input
              onChange={({ currentTarget: { textContent } }: FormEvent) =>
                setInput(textContent?.trim() ?? '')
              }
              placeholder="Ask a question or search"
              inputClassName="max-w-[173px]"
              className="max-w-[216px] rounded text-sm font-normal"
              iconPosition="end"
              icon={<SmileIcon color="#086BD5" fontWeight={600} size={16} />}
            />
            <Button
              variant="action"
              size="action"
              onClick={handleSendMessage}
              disabled={input.length === 0}
            >
              <div>
                <SendHorizontalIcon size={14} />
              </div>
            </Button>
          </div>
          <div className="flex flex-row items-center justify-center gap-1 text-xs text-[#606E78]">
            Chat
            <div>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path
                  d="M6.70481 1.10755C6.75851 0.928167 6.67167 0.736665 6.50134 0.658885C6.33101 0.581104 6.12942 0.640884 6.02902 0.79894L1.18346 8.42768C1.1101 8.54317 1.10546 8.68943 1.17135 8.80934C1.23723 8.92924 1.36319 9.00374 1.5 9.00374H4.53082L2.54458 14.8799C2.48479 15.0568 2.56422 15.2507 2.7309 15.3348C2.89759 15.4189 3.10075 15.3676 3.20749 15.2144L8.69913 7.33417C8.779 7.21956 8.78855 7.07007 8.72391 6.94623C8.65927 6.8224 8.53116 6.74476 8.39147 6.74476H5.01723L6.70481 1.10755Z"
                  fill="#FFF2CC"
                  stroke="#F4B806"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row gap-[2px]">
              by<span className="text-[#086BD5]">Drift</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatContent
