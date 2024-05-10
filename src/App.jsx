import { useState, useEffect } from "react"

import Header from "./components/Header"
import { Footer } from "./components/Footer"
import Button from "./components/Button"

const Main = (props) => {
  useEffect(() => {
    console.log("Component mounted")

    return () => {
      console.log("Component unmounted")
    }
  }, [])

  return (
    <main>
      <h1>{props.title}</h1>
      {props.children}
    </main>
  )
}

const App = () => {
  const [boolean, setBoolean] = useState(false)

  // useEffect(() => {
  //   console.log("Component mounted")
  //   //
  //   return () => {
  //     // cleanup
  //   }
  // }, [])

  function handleClick() {
    setBoolean(!boolean)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleClick} />

      {boolean ? <Main title="Hello World!" color="blue" /> : ""}

      <Footer />
    </div>
  )
}
export default App
