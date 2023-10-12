import Form from "@atoms/Form"
import Isaac from "@atoms/Isaac"
import RotatedBorder from "@atoms/RotatedBorder"
import Typography from "@atoms/Typography"
import Gallery from "@molecules/Gallery"
import Hero from "@molecules/Hero"
import Numbers from "@molecules/Numbers"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import React from "react"

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero
        title="Team ISAAC"
        subtitle="Robotica di servizio mobile per operazioni SAR"
      />
      <Isaac />
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title="progetti"
          text="Le operazioni di soccorso sono difficili e pericolose anche per gli stessi soccorritori. Robotica per RICERCA E SALVATAGGIO per aiutare o sostituire gli umani in questo tipo di missione."
          buttonText="Learn more"
          classNameBorder="tablet:w-[300px] tablet:h-[400px] desktop:w-[619px] desktop:h-[729px] bluePalette"
        >
          <div className="rounded-md bg-project bg-cover desktop:w-[547px] desktop:h-[666px] tablet:w-[240px] tablet:h-[360px]" />
        </TwoColumns>
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="whitePalette">
        <TwoColumns
          palette="whitePalette"
          title="eventi"
          text="Abbiamo partecipato alla Maker Faire Rome 2022 e parteciperemo anche a quella del 2023! Inoltre abbiamo partecipato ad altri eventi come A&T Turin 2023."
          buttonText="read more"
          classNameBorder="tablet:w-[300px] tablet:h-[400px] desktop:w-[619px] desktop:h-[729px] border-light-blue-isaac"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[240px] tablet:h-[360px]" />
        </TwoColumns>
      </Paragraph>
      <Paragraph
        className="laptop:my-32"
        palette="lightBluePalette"
        invertSlope
      >
        <Numbers />
      </Paragraph>
      <Typography className="m-auto my-20 w-fit" variant="h1">
        Galleria
      </Typography>
      <RotatedBorder
        width="80%"
        height="80%"
        top="10"
        left="10%"
        className="border-light-blue-isaac rotate-[3deg]"
      >
        <div className="relative w-full">
          <Gallery
            images={[
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
              {
                children: (
                  <div className="m-auto bg-gray-300 w-96 h-96 rounded-xl" />
                ),
              },
            ]}
          />
        </div>
      </RotatedBorder>
      <Form />
    </div>
  )
}
