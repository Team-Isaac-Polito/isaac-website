import React, { useState } from "react"
import Project from "@molecules/Projects/index"
import { useProjects } from "@molecules/Projects/useProjects"
import { FaSpinner } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

export default function Projects(): JSX.Element {
  const { projects, isLoading } = useProjects()
  const [selectedTitle, setSelectedTitle] = useState("")
  const handleActive = (activeProjectTitle: string) => {
    setSelectedTitle(activeProjectTitle)
  }

  if (isLoading) {
    return <FaSpinner />
  }

  const activeProject =
    selectedTitle !== ""
      ? selectedTitle
      : projects && projects.length > 0
        ? projects[0].title
        : ""

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Team Isaac /Projects</title>
        <meta
          name="description"
          content="Projects that reflect the inspiration and aspirations of Team Isaac."
        />
      </Helmet>
      <Project
        activeProject={activeProject}
        projects={projects}
        isActive={activeProject}
        handleActive={handleActive}
      />
    </div>
  )
}
