import React, { useState, useEffect } from "react"
import "./styles.scss"

const HeroSection = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")

      const data = await res.json()
      setUser(data[0].title)
    }

    fetchData()
  })

  return <div className="hero-section">{user}</div>
}

export default HeroSection
