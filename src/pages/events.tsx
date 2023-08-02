import React from "react"
import Title from "@atoms/Title"
import Paragraph from "@molecules/Paragraph"
import TwoColumns from "@molecules/TwoColumns"
import Gallery from "@molecules/Gallery"
import RotatedBorder from "@atoms/RotatedBorder"

export default function Events(): JSX.Element {
  return ( 
  
  <div>
    <div className="bg-white h-fit py-[150px]">
      <div className="m-auto text-center text-dark-blue-isaac w-fit">
        <h3 className="w-[500px] m-auto text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>   
      </div>
    </div>

    <div className="bg-white h-fit py-[50px]">
      <div className="m-auto text-center text-dark-blue-isaac w-fit">
        <h1 className="w-[500px] m-auto text-7xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>  
      </div>
    </div>

    <Paragraph isLineTop className="my-32" palette="bluePalette">
        <TwoColumns
          isTextLeft
          palette="bluePalette"
          title="MAKER FAIRE 2022"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="Learn more"
          classNameBorder="tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px] bluePalette"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
        </TwoColumns>
      </Paragraph>

      
    <RotatedBorder
      width="90%"
      height="90%"
      left="5%"
      className="border-dark-blue-isaac rotate-[3deg]"
      >
      <div className="w-screen">
        <Gallery />
      </div>
    </RotatedBorder>

    <Paragraph isLineTop className="my-32" palette="lightBluePalette">
        <TwoColumns
          palette="lightBluePalette"
          title="A&T 2023"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
          buttonText="Learn more"
          classNameBorder="tablet:w-[400px] tablet:h-[500px] desktop:w-[619px] desktop:h-[729px] lightBluePalette"
        >
          <div className="rounded-md bg-gray-300 desktop:w-[547px] desktop:h-[666px] tablet:w-[340px] tablet:h-[460px]" />
        </TwoColumns>
      </Paragraph>

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

    <Paragraph
          invertSlope
          palette="bluePalette"
          className="py-[100px] mb-[50px]"
        >
          <div className="m-auto mx-[200px] text-center">
            <Title className="mb-20 bluePalette">MAKER FAIRE 2022</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat.
            Proin semper tristique elit a dictum. Donec id erat sapien. 
            Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. 
            Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu.
            <br />
            <br />
            <br />
            <br />
          </div>

          <RotatedBorder
            width="90%"
            height="90%"
            left="5%"
            className="border-yellow-isaac rotate-[3deg]"
            >
            <div className="w-screen">
              <Gallery />
            </div>
          </RotatedBorder>
    </Paragraph>

    <Paragraph
          invertSlope
          palette="lightBluePalette"
          className="py-[100px] mb-[50px]"
        >
          <div className="m-auto mx-[200px] text-center">
            <Title className="mb-20 lightBluePalette">A&T 2023</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat.
            Proin semper tristique elit a dictum. Donec id erat sapien. 
            Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. 
            Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu.
            <br />
            <br />
            <br />
            <br />
          </div>

          <RotatedBorder
            width="90%"
            height="90%"
            left="5%"
            className="border-yellow-isaac rotate-[3deg]"
            >
            <div className="w-screen">
              <Gallery />
            </div>
          </RotatedBorder>
    </Paragraph>
     

  </div>



  )
}
