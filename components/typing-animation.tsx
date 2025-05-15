"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  delayAfterTyping?: number
  className?: string
}

export function TypingAnimation({
  phrases,
  typingSpeed = 100,
  delayAfterTyping = 1000,
  className = "",
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isTyping && !isDeleting) {
      // Typing the current phrase
      if (currentIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentPhrase[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, typingSpeed)

        return () => clearTimeout(timeout)
      } else {
        // Finished typing the current phrase
        setIsTyping(false)
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayAfterTyping)

        return () => clearTimeout(timeout)
      }
    } else if (isDeleting) {
      // Deleting the current phrase
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, typingSpeed / 2) // Delete faster than typing

        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false)
        setIsTyping(true)
        setCurrentIndex(0)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    } else {
      // Pause after typing before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayAfterTyping)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, isDeleting, phrases, phraseIndex, displayText, typingSpeed, delayAfterTyping])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className="inline-block h-5 w-[2px] animate-blink bg-primary"></span>
    </div>
  )
}
