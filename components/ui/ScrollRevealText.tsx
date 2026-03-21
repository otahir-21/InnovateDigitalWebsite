'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  const y = useTransform(progress, [start, end], [12, 0])
  const filter = useTransform(
    progress,
    [start, end],
    ['blur(4px)', 'blur(0px)']
  )

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="inline-block mr-[0.28em]"
    >
      {word}
    </motion.span>
  )
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </span>
  )
}
