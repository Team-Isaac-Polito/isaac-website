import Layout from "@organisms/Layout"
import React, { Suspense, useLayoutEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages"
import NotFound from "./pages/NotFound"
import About from "./pages/about"
import Contacts from "./pages/contact-us"
import Events from "./pages/events"
import Links from "./pages/links"
import Projects from "./pages/projects"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
    },
  },
})
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
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path={import.meta.env.BASE_URL} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="events" element={<Events />} />
              <Route path="contact-us" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="links" element={<Links />} />
          </Routes>
        </QueryClientProvider>
      </Wrapper>
    </Suspense>
  )
}

export default App
