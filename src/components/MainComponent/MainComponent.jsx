import React from "react"
import "./styles.css"

export const MainComponent = () => {
  return (
    <main>
      <h2 className="container-heading">Fun Facts about React</h2>
      <ul className="main-facts">
        <li>Was first released in 2013</li>
        <li>Was Originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </main>
  )
}
