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
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Lorem ipsum dolor sit amet."
      />
      <Isaac />
      <Paragraph className="laptop:my-32" palette="bluePalette">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title="progetti"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="Learn more"
          classNameBorder="tablet:w-[300px] tablet:h-[400px] desktop:w-[619px] desktop:h-[729px] bluePalette"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[240px] tablet:h-[360px]" />
        </TwoColumns>
      </Paragraph>
      <Paragraph className="laptop:my-32" palette="whitePalette">
        <TwoColumns
          palette="whitePalette"
          title="eventi"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="read more"
          classNameBorder="tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px] border-light-blue-isaac"
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
        width="90%"
        height="90%"
        left="5%"
        className="border-light-blue-isaac rotate-[3deg]"
      >
        <div className="w-screen">
          <Gallery />
        </div>
      </RotatedBorder>
      <Form />
    </div>
  )
}
