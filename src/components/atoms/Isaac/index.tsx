import Typography from "@atoms/Typography"
import React from "react"

function Isaac() {
  return (
    <div className="w-full pt-10 bg-white laptop:pt-24 text-dark-blue-isaac h-fit">
      <Typography className="m-auto mb-10 text-center" variant="h1">
        About
      </Typography>
      <Typography
        variant="p"
        className="mx-10 tablet:mx-[75px] laptop:mx-[100px] desktop:mx-[200px] w-fit tablet:text-center"
      >
        ISAAC è un team di studenti del Politecnico di Torino che opera nel
        campo della robotica. Inizialmente è iniziato con l&apos;obiettivo di
        sviluppare un robot umanoide. Il team ha subito un cambio di rotta nel
        2017 quando il Prof. Quaglia è diventato il nuovo tutor accademico. Ora
        le attività del team si concentrano sui robot di servizio mobile.
      </Typography>
      <div className="grid grid-rows-3 gap-6 tablet:gap-0 tablet:grid-rows-1 tablet:grid-cols-3 py-20 mx-20 laptop:mx-40 desktop:mx-[500px] desktop:gap-20">
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
        <div className="w-[130px] h-[130px] laptop:w-[180px] laptop:h-[180px] notebook:w-[230px] notebook:h-[230px] desktop:w-[280px] desktop:h-[280px] bg-gray-400 rounded-[10px] m-auto"></div>
      </div>
    </div>
  )
}

export default Isaac
