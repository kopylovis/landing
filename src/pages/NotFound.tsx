import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../styles/ContentPage.css'
import '../styles/NotFound.css'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to the homepage to explore our mobile applications."
        url="/404"
        type="website"
      />
      <div className="content-page">
        <div className="content-container">
          <div className="error-content">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Page Not Found</h2>
            <p className="error-description">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
            </div>
            <div className="error-suggestions">
              <h3>You might be looking for:</h3>
              <ul>
                <li><Link to="/?scroll=applications">Home - View all applications</Link></li>
                <li><Link to="/authmeister">Authmeister - OTP Authenticator</Link></li>
                <li><Link to="https://sympee.ru" target="_blank" rel="noopener noreferrer">Sympee - Gifting Platform</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}