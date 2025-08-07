import TabImage from "@assets/projects/Tab.png"
// import AboutImage from "@assets/projects/projects1.jpg"
import Objectives from "@atoms/Objectives/index"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"
import { useTranslation } from "react-i18next"
import { ProjectType } from "@molecules/Projects/index.types"

// import reseq1 from "../../../assets/ReseQ1.mp4"
// import reseq2 from "../../../assets/ReseQ2.mp4"

import { GalleryImage, ProjectsProps } from "./index.types"
import { useProjects } from "./useProjects"
import { FaSpinner } from "react-icons/fa"

export default function Projects({
  activeProject,
  projects,
  isActive,
  handleActive,
}: ProjectsProps): JSX.Element | null {
  const { i18n } = useTranslation("events")
  const activeStyle =
    " mt-3 p-3 text-base font-bold border-x-dark-blue-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1 bg-yellow-isaac text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8 "

  const style =
    " outline-none bg-dark-blue-isaac  text-yellow-isaac  mt-3 p-3 text-base font-bold border-x-yellow-isaac border-solid border-4 uppercase transition duration-500 ease-in-out cursor-pointer w-fit h-fit notebook:py-3 px-7 laptop:px-8 notebook:px-10 desktop:px-12 rounded-3xl tablet:rounded-xl desktop:rounded-2xl hover:scale-105 hover:-translate-y-1  text-dark-blue-isaac tablet:text-base laptop:text-xl notebook:text-2xl desktop:text-4xl hover:outline-none hover:bg-dark-blue-isaac hover:ring hover:ring-offset-light-blue-isaac  hover:text-yellow-isaac focus:ring-offset-8"

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
  // const videoToDisplay =
  //   projectToDisplay.title === "Rese.Q Mk1" ? reseq1 : reseq2
  console.log(projectToDisplay)

  return (
    <div>
      {/* <Typography className="text-center py-7 text-dark-blue" variant="h1">
            {projectToDisplay.title}
          </Typography> */}

      <Paragraph noSlope palette="lightBluePalette ">
        <Typography className="mb-10 text-dark-blue-isaac" variant="h1">
          What is RESE.Q?
        </Typography>
        <Typography variant="p" className="tablet:max-w-[80%] m-auto">
          {isEn()
            ? `RESE.Q is a cutting-edge rescue robot developed to support first responders in the most dangerous and challenging environments, such as partially collapsed buildings after disasters. Its innovative design allows it to enter unstable areas before human rescuers, navigating complex rubble and tight spaces thanks to its modular, snake-like movement system.

Equipped with advanced mapping and imaging capabilities, RESE.Q can generate 2D and 3D visualizations of its surroundings, providing rescuers with critical real-time data. The robot’s sensor suite enables it to detect, locate, and identify victims and hazards, including pipes, gas cylinders, and warning signs, minimizing the risk to human life.

With its articulated arm, RESE.Q can visually inspect hard-to-reach locations and remotely operate on the environment—such as closing valves or opening doors—when immediate action is needed. Additionally, a dedicated module allows it to deliver essential supplies, like first aid kits, directly to those in need within hazardous zones.

By combining agility, versatility, and intelligence, RESE.Q is a powerful tool for modern search-and-rescue operations, extending the reach of emergency teams and saving lives when every second counts.`
            : `RESE.Q è un robot da soccorso all’avanguardia, sviluppato per supportare i primi soccorritori negli ambienti più pericolosi e complessi, come gli edifici parzialmente crollati dopo una calamità. Grazie al suo design innovativo, RESE.Q può entrare in aree instabili prima dei soccorritori umani, muovendosi tra le macerie e passando attraverso spazi ristretti grazie al suo sistema modulare e ai movimenti simili a quelli di un serpente.

Dotato di avanzate capacità di mappatura e imaging, RESE.Q è in grado di generare visualizzazioni 2D e 3D dell’ambiente circostante, fornendo ai soccorritori dati critici in tempo reale. L’insieme dei suoi sensori permette di rilevare, localizzare e identificare vittime e pericoli, come tubature, bombole di gas e segnali di allerta, riducendo al minimo i rischi per le vite umane.

Grazie al suo braccio articolato, RESE.Q può ispezionare visivamente zone di difficile accesso e operare a distanza sull’ambiente, ad esempio chiudendo valvole o aprendo porte quando è necessario intervenire subito. Inoltre, tramite un modulo dedicato, è in grado di trasportare forniture essenziali, come kit di primo soccorso, direttamente alle persone in pericolo all’interno di zone rischiose.

Unendo agilità, versatilità e intelligenza, RESE.Q rappresenta uno strumento fondamentale per le moderne operazioni di ricerca e soccorso, estendendo le capacità dei team di emergenza e contribuendo a salvare vite quando ogni secondo è prezioso.`}
        </Typography>
      </Paragraph>
      {projects && projects.length > 0 && (
        <div className="mt-7 fixed mx-auto top-80 z-10 ">
          <div className="flex flex-col gap-4">
            {projects.map((project: ProjectType, index: number) => (
              <button
                key={project.id || index}
                className={isActive === project.title ? activeStyle : style}
                onClick={() => handleActive(project.title)}
              >
                {project.title.split(" ")[1]}
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
