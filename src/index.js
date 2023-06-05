import "./global.css"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/organisms/Layout"
import Home from "./pages/index.js"
import About from "./pages/about.js"
import Projects from "./pages/projects.js"
import Events from "./pages/events.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
