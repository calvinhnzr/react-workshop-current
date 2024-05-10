import { useState } from "react"

import Header from "./components/Header"
import { Footer } from "./components/Footer"

const Main = (props) => {
  return (
    <main>
      <h1>{props.title}</h1>
      {props.children}
    </main>
  )
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.count}</button>
}

const App = () => {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleClick} count={count} />
      <button onClick={() => setCount(count + 1)}>Click</button>

      <p>{count}</p>
      <Main title="Hello World!" color="blue">
        <p>Some content</p>
      </Main>
      <Footer />
    </div>
  )
}
export default App
