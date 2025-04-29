import SegmentedControl from "@atoms/SegmentedControl"
import { useMembers } from "@molecules/Area/useMembers"

import Typography from "@atoms/Typography"
import React, { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { AreaItem } from "./index.types"
import Card from "@atoms/Card"

export default function Areas(): JSX.Element {
  const { members, isLoading, error } = useMembers()
  const { t } = useTranslation("about")
  const [area, setArea] = useState("mc")

  area
  isLoading
  error

  const areas = t("areas.items", { returnObjects: true }) as AreaItem[]

  return (
    <div className="flex flex-col justify-center notebook:items-center ">
      <SegmentedControl
        name="areas"
        callback={(val) => setArea(val)}
        controlRef={useRef()}
        defaultIndex={2}
        segments={areas.map((areaItem) => ({
          label: areaItem.title,
          value: areaItem.value,
          ref: React.createRef(),
          className: "w-fit h-fit",
        }))}
      />
      <div>
        <div className="gap-5 px-4 bg-gradient-to-br from-dark-blue-isaac via-dark-blue-isaac to-dark-blue-isaac backdrop-blur-md rounded-2xl shadow-2xl  notebook:w-[1680px] notebook:h-[470px] phone:w-[200px] phone:h-[120px] ">
          {isLoading && <p>Loading members...</p>}

          <div className="flex flex-row gap-11 flex-wrap justify-around px-2 py-2 overflow-auto h-[270px] pr-2">
            {/* {!isLoading &&
              members?.map((member) => (
                <Card member={member} key={member.id} />
              ))} */}
            {!isLoading &&
              members
                .filter((member) => member.field.includes(area))
                .map((member) => <Card member={member} key={member.id} />)}
          </div>
          <div>
            {areas.map((areaItem, i) =>
              areaItem.value === area ? (
                <>
                  <Typography
                    key={i}
                    variant="card"
                    className="m-auto text-center w-fit"
                  >
                    {areaItem.description}
                  </Typography>
                </>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
