// import TabImage from "@assets/projects/Tab.png"
import React from "react"
import AboutImage from "@assets/projects/projects1.jpg"
import Objectives from "@atoms/Objectives/index"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import { useTranslation } from "react-i18next"
import { ProjectType } from "@molecules/Projects/index.types"

import { GalleryImage, ProjectsProps } from "./index.types"
import { useProjects } from "./useProjects"
import { FaSpinner } from "react-icons/fa"
import Features from "@atoms/Features"
import TwoColumns from "@molecules/TwoColumns"
import { isEn } from "@utils/utilities"

export default function Projects({
  activeProject,
  projects,
  isActive,
  handleActive,
}: ProjectsProps): JSX.Element | null {
  const { t } = useTranslation("projects")
  const basePadding = "py-3 mx-2 mt-3 w-full"
  const responsivePadding =
    "tablet:mx-4 laptop:px-8 notebook:px-10 desktop:px-12"
  const rounded = "rounded-3xl tablet:rounded-xl desktop:rounded-2xl"
  const textSizes =
    "text-base tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl"
  const transition = "transition duration-500 ease-in-out cursor-pointer"

  const activeStyle = [
    basePadding,
    responsivePadding,
    rounded,
    textSizes,
    transition,
    "underline font-bold uppercase text-yellow-isaac bg-dark-blue-isaac",
  ].join(" ")

  const style = [
    basePadding,
    responsivePadding,
    rounded,
    textSizes,
    transition,
    "outline-none font-bold uppercase bg-dark-blue-isaac text-white",
  ].join(" ")

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
    <div className="flex flex-col">
      <Paragraph noSlope palette="lightBluePalette ">
        <Typography className="mb-10 mt-10 text-dark-blue-isaac" variant="h1">
          What is RESE.Q?
        </Typography>
        <Typography variant="p" className="tablet:max-w-[80%] m-auto">
          {t("intro")}
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
        <div className=" fixed mx-auto  notebook:top-[6.5rem] w-full phone:top-12 tablet:top-14 laptop:top-20 z-10 ">
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

      <Paragraph palette="whitePalette" className="my-20 ">
        <Features
          specs={
            isEn() ? projectToDisplay.specs_eng : projectToDisplay.specs_ita
          }
        />
      </Paragraph>

      <Objectives />

      <div className="mt-24 tablet:mb-24 mb-0">
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
