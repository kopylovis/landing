import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ContentPage.css'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Monoroh Developer'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Monoroh Developer - Learn how we collect, use, and protect your information when you visit our website and use our services.')
    }
  }, [])

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <div className="content-card">
        <h1>Privacy Policy</h1>
        <p><b>Last updated: March 05, 2025</b></p>
        <p>This Privacy Policy describes how Monoroh Developer ("we," "us," or "our") collects, uses, and protects your information when you visit our website and use our services.</p>
        <p>By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us, such as:</p>
        <ul>
          <li>Email address (when you contact us)</li>
          <li>Name (when you provide it in communications)</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3>Usage Information</h3>
        <p>We may automatically collect certain information about your visit, including:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our site</li>
          <li>IP address (anonymized)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and communications</li>
          <li>Improve our website and services</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal requirements</li>
          <li>To protect our rights or the rights of others</li>
          <li>In connection with a business transfer or merger</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

        <h2>Data Retention</h2>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to object to processing</li>
          <li>The right to data portability</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>By email: <a href="mailto:mnrhwow@gmail.com">mnrhwow@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}