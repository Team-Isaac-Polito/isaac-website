// import TabImage from "@assets/projects/Tab.png"
import AboutImage from "@assets/projects/projects1.jpg"
import Objectives from "@atoms/Objectives/index"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import React from "react"
import { useTranslation } from "react-i18next"
import { ProjectType } from "@molecules/Projects/index.types"

import { GalleryImage, ProjectsProps } from "./index.types"
import { useProjects } from "./useProjects"
import { FaSpinner } from "react-icons/fa"
import Features from "@atoms/Features"
import TwoColumns from "@molecules/TwoColumns"

export default function Projects({
  activeProject,
  projects,
  isActive,
  handleActive,
}: ProjectsProps): JSX.Element | null {
  const { i18n } = useTranslation("events")
  const activeStyle =
    " mt-3 p-3 text-base font-bold w-full border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer h-fit notebook:py-3  laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl  bg-yellow-isaac text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none "

  const style =
    " outline-none bg-dark-blue-isaac w-full text-yellow-isaac  mt-3 p-3 text-base font-bold  border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer  h-fit notebook:py-3 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:translate-y-[1px]   text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl  "

  const isEn = (): boolean => {
    return i18n.language === "en"
  }

  const { isLoading } = useProjects()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-dark-blue" />
      </div>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10">
        <Typography variant="h2">No projects data available.</Typography>
      </div>
    )
  }

  const projectToDisplay = projects.find((p) => p && p.title === activeProject)

  if (!projectToDisplay) {
    return (
      <div className="text-center py-10">
        <Typography variant="h2">Project {activeProject} not found.</Typography>
      </div>
    )
  }

  return (
    <div>
      <Paragraph noSlope palette="lightBluePalette ">
        <Typography className="mb-10 text-dark-blue-isaac" variant="h1">
          What is RESE.Q?
        </Typography>
        <Typography variant="p" className="tablet:max-w-[80%] m-auto">
          {isEn()
            ? `RESE.Q Mk2 is a major upgrade over the first prototype, featuring a more advanced 6-DOF arm, improved mobility with new active joints, and a more compact, maneuverable design. The electronics have been completely redesigned for reliability, with a custom PCB and many new sensors, including thermal camera and LIDAR. These improvements make MK2 more capable in challenging environments, better supporting search and rescue operations.`
            : `RESE.Q Mk2 è un’evoluzione del primo prototipo: ha un braccio a 6 gradi di libertà più avanzato, una mobilità migliorata grazie ai nuovi giunti attivi e un design più compatto e manovrabile. L’elettronica è stata riprogettata con un PCB custom e molti nuovi sensori, tra cui termocamera e LIDAR. Questi miglioramenti rendono MK2 ancora più efficace nelle operazioni di ricerca e soccorso.`}
        </Typography>
      </Paragraph>
      <Paragraph palette="bluePalette" className="my-20">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title={projectToDisplay.title}
          text={
            isEn()
              ? projectToDisplay.description_eng
              : projectToDisplay.description_ita
          }
          src={AboutImage}
          alt={`${projectToDisplay.title} image`}
        />
      </Paragraph>
      {projects && projects.length > 0 && (
        <div className=" fixed mx-auto  notebook:top-[6.5rem] w-full phone:top-12 tablet:top-14 notebook:top-20 z-10 ">
          <div className="flex justify-center items-center ">
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
        </div>
      )}

      <video
        className="mt-6"
        width="1920"
        height="300"
        autoPlay
        muted
        loop
        key={projectToDisplay.title}
      >
        <source
          src={`https://cms.teamisaac.it/assets/${projectToDisplay.video}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Paragraph palette="whitePalette" className="my-20 z-10">
        <Features mk={isActive.split(" ")[1].toUpperCase()} />
      </Paragraph>

      <Objectives />

      <div className="py-32 h-fit">
        <Gallery
          images={projectToDisplay.gallery.map((image: GalleryImage) => ({
            src: `https://cms.teamisaac.it/assets/${image.directus_files_id}?width=1900&height=2800&quality=80`,
            alt: `${projectToDisplay.title} gallery image ${image.directus_files_id}`,
          }))}
        />
      </div>
    </div>
  )
}
