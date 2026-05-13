import { Fragment } from 'react'

interface ProseBlockP { type: 'p'; text: string }
interface ProseBlockH2 { type: 'h2'; text: string }
interface ProseBlockH3 { type: 'h3'; text: string }
interface ProseBlockUl { type: 'ul'; items: readonly string[] }
export type ProseBlock = ProseBlockP | ProseBlockH2 | ProseBlockH3 | ProseBlockUl

/**
 * Tiny markdown-ish renderer for translated legal text.
 * Supports inline **bold** and bare email URLs (mailto:...).
 */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  // Pattern matches **bold** OR mailto:... addresses.
  const regex = /\*\*([^*]+)\*\*|mailto:([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1]) {
      parts.push(<strong key={`b${key++}`}>{match[1]}</strong>)
    } else if (match[2]) {
      parts.push(
        <a key={`m${key++}`} href={`mailto:${match[2]}`}>
          {match[2]}
        </a>
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts
}

interface ProseProps {
  blocks: readonly ProseBlock[]
}

export default function Prose({ blocks }: ProseProps) {
  return (
    <article className="prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i}>{renderInline(b.text)}</p>
          case 'h2':
            return <h2 key={i}>{renderInline(b.text)}</h2>
          case 'h3':
            return <h3 key={i}>{renderInline(b.text)}</h3>
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            )
          default: {
            const _exhaustive: never = b
            return <Fragment key={i}>{_exhaustive}</Fragment>
          }
        }
      })}
    </article>
  )
}
