import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ContentPage.css'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service - Monoroh Developer'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for Monoroh Developer - Please read these terms carefully before using our website and services.')
    }
  }, [])

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <div className="content-card">
        <h1>Terms of Service</h1>
        <p><b>Last updated: March 05, 2025</b></p>
        <p>These Terms of Service ("Terms") govern your use of our website and services operated by Monoroh Developer ("we," "us," or "our").</p>
        <p>By accessing or using our services, you agree to be bound by these Terms.</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on our website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>Limitations</h2>
        <p>In no event shall Monoroh Developer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

        <h2>Accuracy of Materials</h2>
        <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.</p>

        <h2>Links</h2>
        <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

        <h2>Modifications</h2>
        <p>We may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.</p>

        <h2>Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>

        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.</p>

        <h2>Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul>
          <li>By email: <a href="mailto:mnrhwow@gmail.com">mnrhwow@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}