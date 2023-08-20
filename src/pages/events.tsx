import Hero from "@molecules/Hero"
import GalleryEvent from "@organisms/GalleryEvent"
import StaticEvent from "@organisms/StaticEvent"
import React from "react"

export default function Events(): JSX.Element {
  return (
    <>
      <Hero title={"Eventi"} />
      <StaticEvent
        title={"MAKER FAIRE 2022"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
        }
        button={"learn more"}
        palette={"bluePalette"}
      />
      <GalleryEvent
        title={"MAKER FAIRE 2022"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu."
        }
        palette={"lightBluePalette"}
      />
    </>
  )
}
