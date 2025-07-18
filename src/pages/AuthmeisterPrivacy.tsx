import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ContentPage.css'

export default function AuthmeisterPrivacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Authmeister'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Authmeister - OTP Authenticator App')
    }
  }, [])

  return (
    <div className="container">
      <div className="header">
        <Link to="/authmeister" className="back-link">← Back to Authmeister</Link>
      </div>
      
      <div className="content-card">
        <h1>Privacy Policy - Authmeister</h1>
        <p><b>Last updated: March 05, 2025</b></p>
        <p>This Privacy Policy describes how the Authmeister app collects, uses, and protects your information.</p>

        <h2>Information We Collect</h2>
        <p>Authmeister is designed with privacy in mind. We collect minimal information:</p>
        <ul>
          <li>Your OTP tokens are stored locally on your device</li>
          <li>No personal information is transmitted to our servers</li>
          <li>App usage analytics (anonymous) may be collected to improve the app</li>
        </ul>

        <h2>Data Storage</h2>
        <p>All your authentication data is stored securely on your device using:</p>
        <ul>
          <li>Encrypted local storage</li>
          <li>Device-specific encryption keys</li>
          <li>No cloud storage of sensitive data</li>
        </ul>

        <h2>Permissions</h2>
        <p>The app requests the following permissions:</p>
        <ul>
          <li>Camera access: For scanning QR codes</li>
          <li>Storage access: For backup/restore functionality</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>We do not share your personal information with third parties. Your OTP tokens remain on your device.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>By email: <a href="mailto:mnrhwow@gmail.com">mnrhwow@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}