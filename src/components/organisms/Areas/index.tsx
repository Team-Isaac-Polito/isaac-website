import SegmentedControl from "@atoms/SegmentedControl"
import Area from "@molecules/Area"
import React, { useRef, useState } from "react"
import placeholder from "../../../assets/IconPlaceholder.png"

export default function Areas(): JSX.Element {
  const [area, setArea] = useState("sf")

  return (
    <>
      <div className="mx-10">
        <SegmentedControl
          name="areas"
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
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Marco Fincato",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Guglielmo Bergatto",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Milena Yahya",
              linkedinPath: "",
            },
          ]}
          init={1}
        />
      )}
      {area == "cn" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Marco Barbon",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Giuseppe Esposito",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Edoardo Platania",
              linkedinPath: "",
            },
          ]}
          init={1}
        />
      )}
      {area == "mc" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Sergio Gugliandolo",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Daniele Latella",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Gianmarco Azzalin",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Edoardo Pagliano",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Federico Gariglio",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Zaid Shaikh",
              linkedinPath: "",
            },
          ]}
          init={2}
        />
      )}
      {area == "em" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Giorgia Tallino",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Apoorva Bhat",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Alessandra Ricci",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Pietro Chirio",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Alice Allegretti",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Simone Torino",
              linkedinPath: "",
            },
          ]}
          init={2}
        />
      )}
      {area == "cm" && (
        <Area
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget laoreet arcu, et placerat erat. Proin semper tristique elit a dictum. Donec id erat sapien. Morbi non placerat lorem. Aenean feugiat est id nisi suscipit, sed iaculis dolor fermentum. Donec mauris elit, aliquam ac lacinia et, mollis in ante. Maecenas enim nibh, vehicula id volutpat eu, congue eu odio. Sed sed varius arcu."
          members={[
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Cristina Genduso",
              linkedinPath: "https://www.linkedin.com/",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Marco Carli",
              linkedinPath: "",
            },
            {
              children: (
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="desktop:h-[370px] w-fit notebook:h-[280px] laptop:h-[200px] h-[150px] m-auto"
                />
                // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[180px] laptop:h-[200px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
              ),
              name: "Ehsan Ali Shakeri Kondori",
              linkedinPath: "",
            },
          ]}
          init={1}
        />
      )}
    </>
  )
}
