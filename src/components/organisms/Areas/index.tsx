import SegmentedControl from "@atoms/SegmentedControl"
import Area from "@molecules/Area"
import React, { useRef, useState } from "react"

export default function Areas(): JSX.Element {
  const [area, setArea] = useState("it")

  return (
    <>
      <div className="mx-10">
        <SegmentedControl
          name="services"
          callback={(val) => setArea(val)}
          controlRef={useRef()}
          segments={[
            {
              label: "SOFTWARE",
              value: "sf",
              ref: useRef(),
              className:
                "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
            },
            {
              label: "CONTROL",
              value: "cn",
              ref: useRef(),
              className:
                "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
            },
            {
              label: "MECHANICS",
              value: "mc",
              ref: useRef(),
              className:
                "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
            },
            {
              label: "EMBEDDED",
              value: "em",
              ref: useRef(),
              className:
                "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
            },
            {
              label: "COMMUNICATION",
              value: "cm",
              ref: useRef(),
              className:
                "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
            },
          ]}
        />
      </div>
      {area == "sf" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
          ]}
        />
      )}
      {area == "cn" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
          ]}
        />
      )}
      {area == "mc" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
          ]}
        />
      )}
      {area == "em" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
          ]}
        />
      )}
      {area == "cm" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
            {
              children: (
                <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Nome Cognome",
              linkedinPath: "",
            },
          ]}
        />
      )}
    </>
  )
}
