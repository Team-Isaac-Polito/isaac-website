/* eslint-env browser */
import Layout from "@organisms/Layout"
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages"
import NotFound from "./pages/NotFound"
import About from "./pages/about"
import Events from "./pages/events"
import Projects from "./pages/projects"

const App = () => {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
