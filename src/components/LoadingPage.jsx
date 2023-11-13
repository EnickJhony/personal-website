import { useEffect, useState } from 'react'

function TextBeingTyped() {
  const [text, setText] = useState('')
  const baseText = 'n pm install EnickWebsite                            '

  useEffect(() => {
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex <= baseText.length) {
        setText(prevText => prevText + baseText[currentIndex])
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return <h1>{text}</h1>
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-slate-300 rounded-md bg-slate-800 px-2 xl:px-4 md:py-1 lg:pb-3">
        <TextBeingTyped />
      </h1>
    </div>
  )
}
