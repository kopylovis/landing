import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Authmeister from './pages/Authmeister'
import AuthmeisterPrivacy from './pages/AuthmeisterPrivacy'
import AuthmeisterTerms from './pages/AuthmeisterTerms'
import NotFound from './pages/NotFound'
import './styles/globals.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/authmeister" element={<Authmeister />} />
            <Route path="/authmeister/privacy" element={<AuthmeisterPrivacy />} />
            <Route path="/authmeister/terms" element={<AuthmeisterTerms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App