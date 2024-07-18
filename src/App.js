import logo from "./logo.svg"
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { MainComponent } from "./components/MainComponent/MainComponent"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
    </div>
  )
}

export default App
