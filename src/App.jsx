import { useState, useEffect } from "react"

import Header from "./components/Header"
import { Footer } from "./components/Footer"
import Button from "./components/Button"
import Card from "./components/Card"

import { fetchData } from "./helpers/fetchData"

const App = () => {
  const [boolean, setBoolean] = useState(false)
  const url =
    "https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/38c62965139a156d4a605be1e046ad8278235fff/articles.json"

  useEffect(() => {
    fetchData(url).then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Header />
      <Main>
        <section>
          <ul className="card-grid" id="article-container">
            <Card />
          </ul>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
export default App

const Main = (props) => {
  return <main>{props.children}</main>
}
