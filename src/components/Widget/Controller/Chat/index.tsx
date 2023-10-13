'use client'
import { Button } from '~/components/Button'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/Popover'

import { PopoverArrow } from '@radix-ui/react-popover'
import ChatContent from './ChatContent'
import { useAtom } from 'jotai'
import { activeFrame } from '../../widget.context'
import { MessageCircleIcon } from 'lucide-react'
import { useEffect } from 'react'

const ChatFrame = () => {
  const [selectedFrame, setSelectedFrame] = useAtom(activeFrame)

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleTriggerClick()
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleTriggerClick() {
    setSelectedFrame((curr) => (curr === 'chat' ? null : 'chat'))
  }

  return (
    <Popover open={selectedFrame === 'chat'}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="icon" onClick={handleTriggerClick}>
          <MessageCircleIcon
            color={selectedFrame === 'chat' ? '#FFF' : '#2B2B28'}
            fill={selectedFrame === 'chat' ? '#FFF' : '#2B2B28'}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="h-[495px] w-[288px] overflow-x-auto rounded-lg border-none bg-white p-0"
        side="right"
        collisionPadding={{ bottom: 34 }}
      >
        <PopoverArrow className="fill-white" width={20} height={10} />
        <ChatContent />
      </PopoverContent>
    </Popover>
  )
}

export default ChatFrame
