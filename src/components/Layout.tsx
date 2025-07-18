import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { LayoutProps } from '../types'

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      {children || <Outlet />}
      <Footer />
    </div>
  )
}