import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="profile-card">
        <img src="/media/develop_logo_512x512.png" alt="Monoroh" className="profile-image" />
        <h1 className="name">Monoroh</h1>
        <p className="title">Mobile App Developer</p>
        <p className="bio">
          Crafting seamless multiplatform experiences with elegant code. 
          Specialized in Kotlin Multiplatform and native iOS/Android development.
        </p>

        <div className="skills">
          <span className="skill-tag">Kotlin Multiplatform</span>
          <span className="skill-tag">iOS</span>
          <span className="skill-tag">Android</span>
        </div>

        <div className="contact-links">
          <a href="mailto:mnrhwow@gmail.com" className="contact-link">
            <img src="/media/send-mail.svg" alt="Email" width="20" height="20" />
            <span>Contact</span>
          </a>
          <a href="https://github.com/kopylovis/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <img src="/media/github-circle.svg" alt="GitHub" width="20" height="20" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}