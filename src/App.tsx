/* eslint-env browser */
import Layout from "@organisms/Layout"
import React, { Suspense } from "react"
import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom"
import Home from "./pages"
import NotFound from "./pages/NotFound"
import About from "./pages/about"
import Events from "./pages/events"
import Projects from "./pages/projects"

const App = () => {
  const { i18n } = useTranslation()
  const baseUrl = i18n.language === "it" ? "" : "/" + i18n.language

  return (
    <Suspense fallback="loading">
      <Routes>
        <Route element={<Layout />}>
          <Route path={`/${baseUrl}`} element={<Home />} />
          <Route path={`/${baseUrl}/about`} element={<About />} />
          <Route path={`/${baseUrl}/projects`} element={<Projects />} />
          <Route path={`/${baseUrl}/events`} element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
