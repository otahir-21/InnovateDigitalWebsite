'use client'

import { motion } from 'framer-motion'

interface WavyTextProps {
  text: string
  className?: string
  delay?: number
}

const letterVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  }),
}

export default function WavyText({ text, className = '', delay = 0 }: WavyTextProps) {
  const words = text.split(' ')

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex overflow-hidden">
          {word.split('').map((char, ci) => {
            const globalIndex = words.slice(0, wi).join('').length + wi + ci
            return (
              <motion.span
                key={ci}
                custom={delay / 0.045 + globalIndex}
                variants={letterVariants}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
