import React, { useEffect, useState } from "react"
import Project from "@molecules/Projects/index"
import { ProjectType } from "@molecules/Projects/index.types"
import { useProjects } from "@molecules/Projects/useProjects"
import { FaSpinner } from "react-icons/fa"

export default function Projects(): JSX.Element {
  const { projects, isLoading } = useProjects()
  const style =
    " mt-3 p-3 text-base font-bold border-x-dark-blue-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-yellow-isaac text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8 "
  const [isActive, setActive] = useState("")
  const handleActive = (activeProjectTitle: string) => {
    setActive(activeProjectTitle)
  }
  const activeStyle =
    " outline-none bg-dark-blue-isaac  text-yellow-isaac  mt-3 p-3 text-base font-bold border-x-yellow-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1  text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8"
  useEffect(() => {
    if (!isLoading && projects && projects?.length > 0 && isActive === "") {
      setActive(projects[0].title)
    }
  }, [isLoading, projects, isActive])
  if (isLoading) {
    return <FaSpinner />
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-7 flex gap-7">
        {projects.map((project: ProjectType, index: number) => (
          <button
            key={project.id || index}
            className={isActive === project.title ? activeStyle : style}
            onClick={() => handleActive(project.title)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div>
        <Project activeProject={isActive} />
      </div>
    </div>
  )
}
