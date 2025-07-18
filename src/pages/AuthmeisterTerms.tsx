import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ContentPage.css'

export default function AuthmeisterTerms() {
  useEffect(() => {
    document.title = 'Terms and Conditions - Authmeister'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and Conditions for Authmeister - OTP Authenticator App')
    }
  }, [])

  return (
    <div className="container">
      <div className="header">
        <Link to="/authmeister" className="back-link">← Back to Authmeister</Link>
      </div>
      
      <div className="content-card">
        <h1>Terms and Conditions - Authmeister</h1>
        <p><b>Last updated: March 05, 2025</b></p>
        <p>These Terms and Conditions govern your use of the Authmeister mobile application.</p>

        <h2>Acceptance of Terms</h2>
        <p>By downloading and using Authmeister, you agree to these terms.</p>

        <h2>Description of Service</h2>
        <p>Authmeister is an OTP (One-Time Password) authenticator app that generates time-based and counter-based authentication codes.</p>

        <h2>User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Keeping your device secure</li>
          <li>Backing up your authentication data</li>
          <li>Not sharing your OTP codes with unauthorized parties</li>
        </ul>

        <h2>Disclaimers</h2>
        <p>The app is provided "as is" without warranties. We are not responsible for any loss of access to your accounts due to app malfunction or device issues.</p>

        <h2>Limitation of Liability</h2>
        <p>Our liability is limited to the maximum extent permitted by law.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about these Terms and Conditions, please contact us:</p>
        <ul>
          <li>By email: <a href="mailto:mnrhwow@gmail.com">mnrhwow@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}