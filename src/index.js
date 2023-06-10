import "./styles/global.css"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/organisms/Layout"
import Home from "./pages/index.tsx"
import About from "./pages/about.tsx"
import Projects from "./pages/projects.tsx"
import Events from "./pages/events.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.REACT_APP_BASE_PATH} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App />)
