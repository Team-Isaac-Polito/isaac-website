/* eslint-env browser */
import "./styles/global.css"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/organisms/Layout"
import Home from "./pages"
import About from "./pages/about"
import Projects from "./pages/projects"
import Events from "./pages/events"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<Layout />}>
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
