import React from "react"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header className="background"></header>
      <main className="app-container">{children}</main>
      <footer className="background"></footer>
    </>
  )
}

export default Layout
