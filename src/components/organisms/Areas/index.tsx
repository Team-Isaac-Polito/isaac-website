import SegmentedControl from "@atoms/SegmentedControl"
import Area from "@molecules/Area"
import React, { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import placeholder from "../../../assets/IconPlaceholder.png"
import { AreaItem } from "./index.types"
import { MemberItem } from "@molecules/Area/index.types"

export default function Areas(): JSX.Element {
  const { t } = useTranslation("about")
  const [area, setArea] = useState("sf")

  const areas = t("areas.items", { returnObjects: true }) as AreaItem[]

  return (
    <>
      <div className="mx-10">
        <SegmentedControl
          name="services"
          callback={(val) => setArea(val)}
          controlRef={useRef()}
          segments={areas.map((areaItem) => ({
            label: areaItem.title,
            value: areaItem.value,
            ref: React.createRef(),
            className:
              "w-full tablet:w-[170px] h-12 tablet:h-10 laptop:w-[230px] laptop:h-12 notebook:w-[280px] desktop:w-[400px] notebook:h-14 m-auto",
          }))}
        />
      </div>
      {areas.map((areaItem) => {
        if (areaItem.value === area) {
          return (
            <Area
              key={areaItem.value}
              desc={areaItem.description}
              members={
                areaItem.members.map((member) => ({
                  children: (
                    <img
                      src={member.image || placeholder}
                      alt={member.name}
                      className="py-11"
                    />
                    // <div className="desktop:w-[250px] desktop:h-[370px] notebook:w-[200px] notebook:h-[300px] laptop:w-[150px] laptop:h-[220px] w-[120px] h-[170px] bg-gray-400 m-auto rounded-xl" />
                  ),
                  name: member.name,
                  linkedinPath: member.linkedin,
                })) as MemberItem[]
              }
              init={1}
            />
          )
        }
      })}
    </>
  )
}
