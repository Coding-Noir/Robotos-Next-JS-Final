import Nav from "./Nav"
import Footer from "./Footer"
import { motion } from "framer-motion"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {/* Nav */}
      <Nav />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
