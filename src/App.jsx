import Header from "./components/Header"
import { Footer } from "./components/Footer"

const Main = (props) => {
  return (
    <main>
      <h1>{props.title}</h1>
      <p>{props.color}</p>
      {props.children}
    </main>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Main title="Hello World!" color="blue">
        <p>Some content</p>
      </Main>
      <Footer />
    </div>
  )
}
export default App
