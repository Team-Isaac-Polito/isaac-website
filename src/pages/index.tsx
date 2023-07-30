import Form from "@atoms/Form"
import RotatedBorder from "@atoms/RotatedBorder"
import Title from "@atoms/Title"
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
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div
        className="w-full pt-10 bg-white laptop:pt-24 text-dark-blue-isaac h-fit"
        id="about"
      >
        <Title className="m-auto mb-10 text-center">About</Title>
        <p className="mx-10 tablet:mx-[75px] laptop:mx-[100px] desktop:mx-[200px] w-fit tablet:text-center text-[18px] laptop:text-2xl desktop:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          laoreet arcu, et placerat erat. Proin semper tristique elit a dictum.
          Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id
          nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam
          ac lacinia et, mollis in ante.{" "}
        </p>
        <div className="grid grid-rows-3 gap-6 tablet:gap-0 tablet:grid-rows-1 tablet:grid-cols-3 py-20 mx-20 laptop:mx-40 desktop:mx-[500px] dekstop:gap-10">
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
          <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] desktop:w-[262px] desktop:h-[263px] bg-gray-400 rounded-[10px] m-auto"></div>
        </div>
      </div>
      <Paragraph className="my-32" palette="bluePalette">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title="progetti"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="Learn more"
          classNameBorder="tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px] bluePalette"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
        </TwoColumns>
      </Paragraph>
      <div className="mx-48 my-52 h-fit">
        <TwoColumns
          palette="whitePalette"
          title="eventi"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="read more"
          classNameBorder="tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px] border-light-blue-isaac"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
        </TwoColumns>
      </div>
      <Paragraph className="my-32" palette="lightBluePalette" invertSlope>
        <Numbers />
      </Paragraph>
      <Title className="m-auto mb-20 w-fit">Galleria</Title>
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
