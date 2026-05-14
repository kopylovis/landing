import { useI18n } from '../hooks/useI18n'
import { useReveal } from '../hooks/useReveal'
import '../styles/AboutSection.css'

export default function AboutSection() {
  const header = useReveal<HTMLDivElement>()
  const principlesRow = useReveal<HTMLDivElement>({ rootMargin: '0px 0px -5% 0px' })
  const stackRow = useReveal<HTMLDivElement>({ rootMargin: '0px 0px -5% 0px' })
  const closer = useReveal<HTMLDivElement>({ rootMargin: '0px 0px -5% 0px' })
  const { t } = useI18n()

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div ref={header.ref} className="reveal about__header" data-visible={header.visible}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 id="about-title" className="about__title">{t.about.title}</h2>
          <p className="about__lede">{t.about.lede}</p>
        </div>

        <div
          ref={principlesRow.ref}
          className="about__principles reveal"
          data-visible={principlesRow.visible}
        >
          {t.about.principles.map((p, i) => (
            <article
              key={p.title}
              className="about__principle"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="about__principle-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="about__principle-title">{p.title}</h3>
              <p className="about__principle-body">{p.body}</p>
            </article>
          ))}
        </div>

        <div
          ref={stackRow.ref}
          className="reveal about__stack"
          data-visible={stackRow.visible}
        >
          <header className="about__stack-head">
            <div>
              <span className="eyebrow">{t.about.stackEyebrow}</span>
              <h3 className="about__stack-title">{t.about.stackTitle}</h3>
            </div>
            <p className="about__stack-sub">{t.about.stackSub}</p>
          </header>

          <ol className="about__stack-list" role="list">
            {t.stack.map((item, i) => (
              <li key={item.name} className="about__stack-row">
                <span className="about__stack-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="about__stack-body">
                  <span className="about__stack-name">{item.name}</span>
                  <span className="about__stack-detail">{item.detail}</span>
                </div>
                <span className="about__stack-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div
          ref={closer.ref}
          className="reveal about__closer"
          data-visible={closer.visible}
        >
          <p className="about__closer-text">{t.about.closer}</p>
        </div>
      </div>
    </section>
  )
}
