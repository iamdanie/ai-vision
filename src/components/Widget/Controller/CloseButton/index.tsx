'use client'

import { useAtom } from 'jotai'
import { Button } from '~/components/Button'
import { activeFrame } from '../../widget.context'
import { X } from 'lucide-react'

const CloseButton = () => {
  const [, setSelectedFrame] = useAtom(activeFrame)
  return (
    <div>
      <Button size="icon" variant="icon" onClick={() => setSelectedFrame(null)}>
        <X color="#2B2B28" />
      </Button>
    </div>
  )
}

export default CloseButton
