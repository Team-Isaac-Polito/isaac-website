import React, { useEffect, useState } from "react"
import Project from "@molecules/Projects/index"
import { useProjects } from "@molecules/Projects/useProjects"
import { FaSpinner } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

export default function Projects(): JSX.Element {
  const { projects, isLoading } = useProjects()
  const [isActive, setActive] = useState("")
  const handleActive = (activeProjectTitle: string) => {
    setActive(activeProjectTitle)
  }

  useEffect(() => {
    if (!isLoading && projects && projects?.length > 0 && isActive === "") {
      setActive(projects[0].title)
    }
  }, [isLoading, projects, isActive])
  if (isLoading) {
    return <FaSpinner />
  }

  return (
        <>
       <Helmet>
        <title>Team Isaac /Projects</title>
        <meta
          name="description"
          content="Projects that reflect the inspiration and aspirations of Team Isaac."
        />
      </Helmet>
    <Project
      activeProject={isActive}
      projects={projects}
      isActive={isActive}
      handleActive={handleActive}
    />
      </>
  )
}
