import SegmentedControl from "@atoms/SegmentedControl"
import Typography from "@atoms/Typography"
import React, { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { AreaItem } from "./index.types"

export default function Areas(): JSX.Element {
  const { t } = useTranslation("about")
  const [area, setArea] = useState("sf")

  const areas = t("areas.items", { returnObjects: true }) as AreaItem[]

  return (
    <div className="grid grid-cols-2 mx-10 mt-16">
      <SegmentedControl
        name="areas"
        callback={(val) => setArea(val)}
        controlRef={useRef()}
        segments={areas.map((areaItem) => ({
          label: areaItem.title,
          value: areaItem.value,
          ref: React.createRef(),
          className: "w-fit h-fit",
        }))}
      />
      {areas.map((areaItem, i) =>
        areaItem.value === area ? (
          <Typography key={i} variant="p" className="m-auto text-center w-fit">
            {areaItem.description}
          </Typography>
        ) : null
      )}
    </div>
  )
}
