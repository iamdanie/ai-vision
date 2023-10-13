'use client'

import { v4 as uuidv4 } from 'uuid'
import { ChevronRightIcon } from 'lucide-react'
import { ChatMessage } from '~/components/Widget/widget.context'
import { useRef } from 'react'
import { useAtom } from 'jotai'
import { products, searchResults } from '~/app/app.context'
import * as R from 'ramda'
import { Input } from '@nextui-org/react'

export const INTRODUCTION = 'INTRODUCTION'
export const ORDINARY_SEARCH_RESULTS = 'ORDINARY_SEARCH_RESULTS'
export const DEFAULT_ANSWER = 'DEFAULT_ANSWER'
export const TAILORED_AI_RESULTS = 'TAILORED_AI_RESULTS'

export const CHAT_ANSWERS: Record<string, ChatMessage[]> = {
  [ORDINARY_SEARCH_RESULTS]: [
    {
      id: uuidv4(),
      role: 'ai',
      Content: () => <div>{`Lemme give you a hand with that`}</div>,
      resources: {
        title: 'Applinks Could Infra...',
        link: 'https://www.applinks.com/security/security-privacy-policy.hmtl/',
      },
    },
  ],
  [DEFAULT_ANSWER]: [
    {
      id: uuidv4(),
      role: 'ai',
      Content: () => (
        <>{`Sorry, i didn't get that, can you please repeat your question?`}</>
      ),
    },
  ],
  [TAILORED_AI_RESULTS]: [
    {
      id: uuidv4(),
      role: 'ai',
      Content: ({ metadata: { setLoading, router, setMessages } }) => {
        const [inventory] = useAtom(products)
        const [_, setResults] = useAtom(searchResults)
        const hiddenFileInput = useRef<HTMLInputElement>(null)

        const handleOpenForm = () => {
          hiddenFileInput?.current?.click()
        }
        const uploadToServer = async (img: Blob) => {
          const body = new FormData()
          if (img) {
            body.append('file', img)
            setLoading(true)
            const response = await fetch('/api/upload', {
              method: 'POST',
              body,
            })
            const { success, predictions } = await response.json()
            setLoading(false)
            if (success && predictions) {
              const keywords = predictions.reduce(
                (accum: string[], { className }: { className: string }) => {
                  const newKeywords = className.split(' ')
                  accum = [
                    ...accum,
                    ...newKeywords.map((word) => word.replace(',', '')),
                  ]
                  return accum
                },
                [],
              )

              const matchingProducts = inventory.filter(
                ({ brand, categories, tags }) => {
                  const intersection = R.intersection(
                    [...categories, ...tags, brand.toLowerCase()],
                    keywords,
                  )

                  return intersection.length > 0
                },
              )

              if (matchingProducts) {
                setResults(matchingProducts)
                setMessages({
                  id: uuidv4(),
                  Content: () => (
                    <div className="flex w-[180px] cursor-pointer flex-col gap-1 text-sm font-normal">
                      <div className="flex flex-row flex-wrap items-center justify-start gap-1 border-b border-b-gray-200 pb-1">
                        {`Hurray! We've created a new outfit specially made for you. Go to your dressing room and try it out!`}
                      </div>
                      <div
                        className="flex cursor-pointer flex-row justify-between p-0"
                        onClick={() => router.push('/searchResult')}
                      >
                        {`Go to dressing room`}
                        <ChevronRightIcon size={16} color="#E3B04B" />
                      </div>
                    </div>
                  ),
                  role: 'ai',
                })
              }
            }
          }
        }

        const uploadToClient = (event: any) => {
          setLoading(true)
          if (event?.target?.files?.[0]) {
            const img = event.target.files[0]
            setMessages({
              id: uuidv4(),
              role: 'ai',
              Content: () => (
                <div
                  className="flex cursor-pointer flex-row flex-wrap items-center justify-between gap-1 pt-1"
                  onClick={() => uploadToServer(img)}
                >
                  <div className="text-sm font-normal">Send it over</div>
                  <ChevronRightIcon size={16} color="#E3B04B" />
                </div>
              ),
            })
          }
          setLoading(false)
        }

        return (
          <div className="flex w-[180px] flex-col">
            <div className="pb-1 text-sm font-normal">
              {`Sure thing! Let me help you get all dressed up, i'll create an
              outfit specially tailored for you. All i need is some inspo to
              start working, would you please share with me a photo of an interesting
              outfit?`}
            </div>
            <Input
              ref={hiddenFileInput}
              id="button-file"
              type="file"
              name="myImage"
              onChange={uploadToClient}
              className="hidden"
            />
            <div
              className="flex cursor-pointer flex-row flex-wrap items-center justify-between gap-1 border-t border-t-gray-200 pt-1"
              onClick={handleOpenForm}
            >
              <div className="text-sm font-normal">Choose a photo</div>
              <ChevronRightIcon size={16} color="#E3B04B" />
            </div>
          </div>
        )
      },
    },
  ],
}
