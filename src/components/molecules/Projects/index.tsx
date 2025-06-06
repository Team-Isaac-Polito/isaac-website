import TabImage from "@assets/projects/Tab.png"
import AboutImage from "@assets/projects/projects1.jpg"
import Objectives from "@atoms/Objectives/index"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
// import reseq1 from "../../../assets/ReseQ1.mp4"
// import reseq2 from "../../../assets/ReseQ2.mp4"

import { GalleryImage, ProjectsProps } from "./index.types"
import { useProjects } from "./useProjects"
import { FaSpinner } from "react-icons/fa"

export default function Projects({
  activeProject,
}: ProjectsProps): JSX.Element | null {
  const { i18n } = useTranslation("events")

  const isEn = (): boolean => {
    return i18n.language === "en"
  }

  const { projects, isLoading } = useProjects()

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
  // const videoToDisplay =
  //   projectToDisplay.title === "Rese.Q Mk1" ? reseq1 : reseq2
  console.log(projectToDisplay)

  return (
    <div>
      {/* <Typography className="text-center py-7 text-dark-blue" variant="h1">
            {projectToDisplay.title}
          </Typography> */}

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

      <Paragraph palette="whitePalette" className="my-20">
        <TwoColumns
          palette="whitePalette"
          title={isEn() ? "Features" : "Caratteristiche"}
          text={
            isEn()
              ? projectToDisplay.features_eng
              : projectToDisplay.features_ita
          }
          src={TabImage}
          alt={"Robot performance scheme"}
        />
        <button className="mt-6 p-3 text-base font-bold border-x-dark-blue-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-yellow-isaac text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8">
          Compare
        </button>
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
