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
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row justify-center">
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
      </div>
      <div>
        <div className=" hidden tablet:block gap-5 overflow-auto bg-gradient-to-br from-blue-800/40 to-cyan-900/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl  w-[1680px] h-[470px] ">
          {isLoading && <p>Loading members...</p>}

          <div className="flex flex-row gap-11 flex-wrap justify-around px-2 py-2">
            {!isLoading && members?.length === 0 && (
              <p>No members available for this area.</p>
            )}
            {!isLoading &&
              members?.map((member) => (
                <Card member={member} key={member.id} />
              ))}
            {/* {!isLoading &&
              members
                .filter((member) => member.area.includes(area))
                .map((member) => <Card member={member} key={member.id} />)} */}
          </div>
          <div>
            {areas.map((areaItem, i) =>
              areaItem.value === area ? (
                <>
                  <Typography
                    key={i}
                    variant="p"
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
