import Layout from "@organisms/Layout"
import React, { Suspense, useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages"
import NotFound from "./pages/NotFound"
import About from "./pages/about"
import Events from "./pages/events"
import Projects from "./pages/projects"

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

const App = () => {
  return (
    <Suspense fallback="loading">
      <Wrapper>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Wrapper>
    </Suspense>
  )
}

export default App
