'use client'
import Chat from './Chat'
import CloseButton from './CloseButton'

const Controller = () => {
  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-center gap-3 p-8">
      <Chat />
      <CloseButton />
    </div>
  )
}

export default Controller
