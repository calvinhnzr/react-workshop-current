import { useState, useEffect } from "react"

import Header from "./components/Header"
import { Footer } from "./components/Footer"
import Button from "./components/Button"
import Card from "./components/Card"

const App = () => {
  const [boolean, setBoolean] = useState(false)

  function handleClick() {
    setBoolean(!boolean)
  }

  return (
    <div>
      <Header />
      <Main>
        <section>
          <ul className="card-grid" id="article-container">
            <Card />
            <Card />
          </ul>
        </section>

        <Button handleClick={handleClick} />
      </Main>

      <Footer />
    </div>
  )
}
export default App

const Main = (props) => {
  return <main>{props.children}</main>
}
