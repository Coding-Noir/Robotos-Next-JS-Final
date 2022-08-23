import { useState } from "react"
import Image from "next/image"
import { Logo } from "../components/microComponents/images"

const links = [
  { name: "Your Stuff", link: "/your-stuff", id: 1 },
  { name: "Rarity", link: "/#rarity", id: 2 },
  { name: "FAQ", link: "/#faq", id: 3 },
]

const Nav = () => {
  // state
  const [bgColorChange, setBgColorChange] = useState(false)

  // Change Nav background color on scroll
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      console.log("Scolled")
      setBgColorChange(true)
    } else {
      setBgColorChange(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor)
  }

  // Mobile Aninmation
  function sayHello() {
    document.body.classList.toggle("mobile-open")
  }

  return (
    <nav className={bgColorChange ? "nav colorChange" : "nav"}>
      <div className="container">
        <div className="menu">
          <a href="/" className="brand">
            <Image
              src={Logo}
              width={28}
              height={28}
              className="logo-icon"
              alt="Logo"
            />
            <div className="logo-text">Robotos</div>
          </a>

          <ul className="menu-list desktop-nav">
            {links.map(({ name, link, id }) => (
              <li className="menu-list-item" key={id}>
                <a href={link} className="menu-link">
                  {name}
                </a>
              </li>
            ))}
            <li className="menu-list-item">
              <a href="#" className="menu-link nav-cta">
                Connect
              </a>
            </li>
          </ul>

          <ul className="menu-list mobile-nav">
            {links.map(({ name, link, id }) => (
              <li className="menu-list-item" key={id}>
                <a href={link} className="menu-link" onClick={sayHello}>
                  {name}
                </a>
              </li>
            ))}
            <li className="menu-list-item">
              <a href="#" className="menu-link nav-cta">
                Connect
              </a>
            </li>
          </ul>

          <button type="button" className="hamburger" onClick={sayHello}>
            <span className="line bar-one"></span>
            <span className="line bar-two"></span>
            <span className="line bar-three"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
